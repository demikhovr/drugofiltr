'use strict';

import { Model } from './model.js';
import { View } from './view.js';

export const Controller = {
    init() {
        const friendFields = 'photo_100, last_name, first_name, id';
        const appId = 6487485;
        const accessNumber = 2;

        if (JSON.parse(localStorage.getItem('friends') || null)) {
            const friends = JSON.parse(localStorage.getItem('friends'));

            View.renderFriends(friends);
        } else {
            Model.login(appId, accessNumber)
                .then(() => {
                    return Model.getFriends({ fields: friendFields });
                })
                .then(data => {
                    View.renderFriends(data.items);
                })
                .catch(evt => {
                    alert('Ошибка: ' + evt.message);
                });
        }
    }
};
