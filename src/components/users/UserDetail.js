import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const UserDetail = ({ seeUserDetail, handleUserDetail, userDetail }) => {
    
    const {name, email } = userDetail;
    
    return (
        <div className={`modal ${seeUserDetail ? "is-active" : "" }`}>
            <div className="modal-background"></div>
            <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">{ name }</p>
            </header>
            <section className="modal-card-body">
                <h4>
                    <FontAwesomeIcon icon={ faEnvelope } /> 
                    { ` ${ email }` }
                </h4>
            </section>
            <footer className="modal-card-foot">
                <button 
                    className="button"
                    onClick={() => handleUserDetail()}
                >
                    Close
                </button>
            </footer>
            </div>
        </div>
    );
}

UserDetail.propTypes = {
    seeUserDetail: PropTypes.bool.isRequired,
    handleUserDetail: PropTypes.func.isRequired,
    userDetail: PropTypes.object.isRequired
}

export default UserDetail;
