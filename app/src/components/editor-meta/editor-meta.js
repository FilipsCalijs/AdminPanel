import React, { Component } from 'react';
import UIkit from 'uikit';

export default class EditorMeta extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { target, modal, method } = this.props;

        return (
            <div id={target} uk-modal={modal.toString()}>
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">Редоактирование Мета-тэгов</h2>
                    <p>Вы действительно хотите сохранить изменения?</p>
                    <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-margin-small-right uk-modal-close" type="button">Отменить</button>
                        <button 
                            className="uk-button uk-button-primary uk-modal-close" 
                            type="button">
                            Применить
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}
