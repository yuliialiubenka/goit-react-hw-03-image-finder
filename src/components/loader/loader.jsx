import { Circles } from 'react-loader-spinner';
import { useStyles } from './loaderStyles';

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderWrapper}>
      <Circles
          height="120"
          width="120"
          color="#fff"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
      />
    </div>
  );
};

export default Loader;