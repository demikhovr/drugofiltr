'use strict';

export const templates = {
    friendTemplate({photo_100, first_name, last_name, id}, selected) {
        return `
            <div class="friends-list__item-pic">
              <img src="${photo_100}" alt="${first_name} ${last_name}" draggable="false">
            </div>
            <h4 class="friends-list__item-name">${first_name} ${last_name}</h4>
            ${selected ?
        (`<button class="friends-list__btn  friends-list__btn--remove" data-id="${id}" type="button">
                <span class="visually-hidden">Добавить</span>
              </button>`)
        :
        (`<button class="friends-list__btn  friends-list__btn--add" data-id="${id}" type="button">
                <span class="visually-hidden">Добавить</span>
              </button>`)
        }
            `;
    }
};