import React, { PureComponent } from 'react';
import append from 'ramda/src/append';
import compose from 'ramda/src/compose';
import flip from 'ramda/src/flip';
import includes from 'ramda/src/includes';
import reverse from 'ramda/src/reverse';
import symmetricDifference from 'ramda/src/symmetricDifference';
import classNames from 'classnames';
import Input from './input';
import Banner from './banner';


// item scheme
/* {
 *     title: string,
 *     description: string,
 *     id: numner
 * } */

function makeItem(title) {
    return {
        id: Math.floor((Math.random() * 10000000)),
        title
    }
}

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            list: [makeItem('Thing-in-ramda')],
            checkedList: []
        };

        this.appendNewItem = this.appendNewItem.bind(this);
        this.toggleCheckedItem = this.toggleCheckedItem.bind(this);
    }

    toggleCheckedItem(item) {
        return () => {
            this.setState(({checkedList}) => {
                return ({
                    checkedList: symmetricDifference([item], checkedList)
                })
            });
        }
    }

    appendNewItem(title) {
        this.setState(({ list }) => ({
            list: compose(flip(append)(list), makeItem)(title)
        }));
    }

    render() {
        const { list, checkedList } = this.state;

        // fn:: item -> boolean
        const isItemChecked = flip(includes)(checkedList);

        return (
            <div className="container">
                <h1>RamdaStyle</h1>

                <div className="row">
                    <Input className="col s12 m8 l6" onEnter={this.appendNewItem} />
                </div>

                <div className="row">
                    <ul className='collection col s12 m8 l6' >
                        {
                            reverse(list).map((item) => {
                                return (
                                    <li key={item.id}
                                        className={classNames(
                                            'collection-item row', {
                                                'grey-text text-lighten-2': includes(item, checkedList)
                                            })}>
                                        <span className="col s10 m10 l10">{ item.title }</span>
                                        <a
                                            onClick={this.toggleCheckedItem(item)}
                                            className="col s2 m2 l2 waves-effect waves-light btn">DONE</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
