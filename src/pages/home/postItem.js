import React from 'react';
import PostTitle from './postTitle'
import PostAuthor from './postAuthor'
import ListItem from '@material-ui/core/ListItem';

import { createStyles, withStyles } from '@material-ui/core/styles';
const styles = (theme) => createStyles({
    root1: {
        display: 'flex',
        // height: 350,
        flexDirection: 'column',
        boxSizing: 'border-box'
    },
    root2: {
        display: 'flex',
        // height: 350,
        flexDirection: 'row',
        boxSizing: 'border-box'
    },
    root3: {
        display: 'flex',
        // height: 350,
        flexDirection: 'row-reverse',
        boxSizing: 'border-box'
    },
    imgWrapper1: {
        width: '100%',
        height: 150,
        marginBottom: 22
    },
    imgWrapper2: {
        width: 100,
        height: 100,
        marginRight: 22
    },
    imgWrapper3: {
        width: 150,
        height: 150,
        marginLeft: 22
    },
    content1: {
        flex: 1
    },
    content2: {
        flex: 1,
        height: 100,
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        flexDirection: 'column'
    },
    content3: {
        flex: 1,
        height: 150,
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        flexDirection: 'column'
    }
});

class PostItem extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render () {
        /**
         * mode  https://medium.com/
         * 1. column,
         * 2. row => img, content
         * 3. row => content, img 并且content带action   
         */
        const { classes, mode } = this.props
        const rootStyleObject = {
            1: 'root1',
            2: 'root2',
            3: 'root3'
        }

        const imgWrapperObject = {
            1: 'imgWrapper1',
            2: 'imgWrapper2',
            3: 'imgWrapper3'
        }
        const contentObject = {
            1: 'content1',
            2: 'content2',
            3: 'content3',
        }
        const postTitleStyle = {
            1: {
                size: '1.1rem',
                subTitle: true
            },
            2: {
                size: '1.05rem',
                subTitle: false
            },
            3: {
                size: '1.1rem',
                subTitle: true
            },
        }

        return (
            <ListItem className={ classes[rootStyleObject[mode]] }>
                <div className={ classes[imgWrapperObject[mode]] }>
                    <img style={ { width: '100%', height: '100%' } } alt="post" src="https://img.zcool.cn/community/01018d5c374e94a80121fbb0446c17.jpg@1280w_1l_2o_100sh.jpg"></img>
                </div>
                <div className={ classes[contentObject[mode]] }>
                    <PostTitle size={ postTitleStyle[mode].size } subTitle={ postTitleStyle[mode].subTitle } />
                    <PostAuthor />
                </div>
            </ListItem>
        )
    }
}
export default withStyles(styles)(PostItem);
