const NEED_SUBSCRIBERS = 1000;
const NEED_VIEW = 48000;
const channelId = 'UC_dHXyDZ5sEhxEGb8oAD_Xw';

const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=AIzaSyB3X29xDO4ndP-vYKk9rTTrz8NMz2i3LOc`;
const view = document.querySelector('.viewCount');
const subscriber = document.querySelector('.subscriberCount');
const viewPercent = document.querySelector('.text-view');
const subscriberPercent = document.querySelector('.text-subscriber');

fetch(url).then(response=> response.json()).then(data => sendData(data.items[0].statistics));

const sendData = (data) => {
    View(data.viewCount);
    Subscriber(data.subscriberCount);
}

const View = (time) => {
    const count = (time/NEED_VIEW * 100).toFixed(2);
    view.style.transform = `translateY(${0.9*(100-count)}%)`;
    viewPercent.innerHTML = `${count}%`;
}

const Subscriber = (person) => {
    const count = (person/NEED_SUBSCRIBERS * 100).toFixed(1);
    subscriber.style.transform = `translateY(${(100-count)*0.9}%)`;
    subscriberPercent.innerHTML = `${count}%`;
}