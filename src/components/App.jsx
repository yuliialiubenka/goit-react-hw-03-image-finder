import { Component } from 'react';
import * as API from './pixabayApi/pixabayApi';
import Searchbar from './searchbar/searchbar';
import ImageGallery from './imageGallery/imageGallery';
import Loader from './loader/loader';
import Button from './button/button';
import EmptyGallery from './emptyGallery/emptyGallery'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const paramsForNotify = {
  position: 'right-bottom',
  distance: '16px',
  timeout: 3000,
  width: '300px',
  fontSize: '16px',
  borderRadius: '10px',
  showOnlyTheLastOne: true,
  fontFamily: 'Montserrat',
  cssAnimationStyle: 'from-right',
  fontAwesomeIconSize: '20px'
};

class App extends Component {
  state = {
    searchName: '',
    images: [],
    error: null,
    currentPage: 1,
    totalPages: 0,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleSubmit = query => {
    if(query === this.state.searchName && this.state.searchName !== "") {
      return Notify.info('Enter new request, pleace.', paramsForNotify);
    } else if (query === "") {
      return Notify.info('Enter your request, pleace.', paramsForNotify);
    } else {
      this.setState({
        searchName: query,
        images: [],
        currentPage: 1,
      });
    }
  };

  addImages = async () => {
    const { searchName, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });

      const data = await API.getImages(searchName, currentPage);

      if (data.hits.length === 0) {

        return Notify.failure('Sorry, there are no images matching your search query. Please try again.', paramsForNotify);
      }

      const normalizedImages = API.normalizedImages(data.hits);

      this.setState(state => ({
        images: [...state.images, ...normalizedImages],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, currentPage, totalPages, isLoading } = this.state;
    let content;

    if (images.length > 0) {
      content = <ImageGallery images={images} />
    } else if(!isLoading && images.length === 0) {
      content = <EmptyGallery />
    }
    
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
          {content}
          {isLoading && <Loader />}
          {images.length > 0 && totalPages !== currentPage && !isLoading && (
            <Button onClick={this.loadMore} />
          )}
      </div>
    );
  }
}

export default App;