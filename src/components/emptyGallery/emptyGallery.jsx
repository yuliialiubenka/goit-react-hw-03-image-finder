import { Component } from 'react';
import { withStyles } from 'react-jss';
import { styles } from './emptyGalleryStyles';
import Image from "../../images/cloud-storage.png"

class EmptyGallery extends Component {
    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.wrapper}>
                <img className={classes.image} src={Image} alt="Empty block" width={300} />
                <p className={classes.text}>Image gallery is empty...</p>
            </div>
        );
    }
}

export default withStyles(styles)(EmptyGallery);