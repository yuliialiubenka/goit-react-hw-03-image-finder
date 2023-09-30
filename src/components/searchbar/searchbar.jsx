import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import { styles } from './searchbarStyles';
import Image from '../../images/search.svg';

class Searchbar extends Component {
    state = {
        inputValue: '',
    };

    handleChange = event => {
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue.trim());
        this.setState({ inputValue: '' })
    };

    render() {
        const { classes } = this.props;
        
        return (
            <header className={classes.header}>
                <form className={classes.searchForm} onSubmit={this.handleSubmit}>
                    <label className={classes.label} htmlFor="searchName">
                        <input
                            className={classes.searchInput}
                            name="searchName"
                            type="text"
                            id="search"
                            placeholder="Search photos"
                            value={this.state.inputValue}
                            onChange={this.handleChange}
                        />
                        <button className={classes.searchButton}>
                            <img src={Image} alt="Search" />
                        </button>
                    </label>
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(Searchbar);