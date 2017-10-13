import video11 from '../json/video-11';
import video11Complain from '../json/video-11-complain';
import user333 from '../json/user-333';
import user333Friends from '../json/user-333-friends';
import user333chatUser555 from '../json/user-333-chat-user-555';

const defaultDrawerItems = video11Complain;

export const fetchDrawerItems = link => new Promise((resolve, reject) => {
  if (link === 'video-11-complain') {
    resolve(video11Complain);
  } else if (link === 'user-333-friends') {
    resolve(user333Friends);
  } else {
    // fall back to default drawer items (if no link matches)
    resolve(defaultDrawerItems);
  }
});

export const fetchScreenData = screenName => new Promise((resolve, reject) => {
  if (screenName === 'video-11') {
    resolve(video11);
  } else if (screenName === 'user-333') {
    resolve(user333);
  } else if (screenName === 'user-333-chat-user-555') {
    resolve(user333chatUser555);
  } else {
    const error = {
      message: 'API Request Failed',
    };
    reject(error);
  }
});
