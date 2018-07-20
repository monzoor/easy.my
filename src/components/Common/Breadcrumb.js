import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class Breadcrumb extends Component {

    render() {
        return (
            <div className="row mb-s--s d--none d-m--none d-l--block pl-m--m">
                <ol className="breadcrumb text-xs">

                    {this.props.crumbInfos.map((info, index) => (

                        <li key={index} className={`breadcrumb-item ${(info.active) ? 'active' : ''}`}>
                            <Link to={info.url} className="base-text">{info.name}</Link>
                        </li>
                    ))}

                </ol>
            </div>
        );
    }
}

export default Breadcrumb;
