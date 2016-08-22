import fetch from 'isomorphic-fetch'

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'
export const DISMISS_MESSAGE = 'DISMISS_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const RECEIVE_NO_IMAGE = 'RECEIVE_NO_IMAGE'
export const REQUEST_IMAGES = 'REQUEST_IMAGES'

function requestImages() {
  return {
    type: REQUEST_IMAGES,
  }
}

function receiveImages(imageList) {
  return {
    type: RECEIVE_IMAGES,
    imageList
  }
}

function receiveNoImage() {
  return {
    type: RECEIVE_NO_IMAGE
  }
}

function dismissMessage() {
  return {
    type: DISMISS_MESSAGE
  }
}

function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    message
  }
}

function fetchImages() {
  return dispatch => {
    dispatch(requestImages())
    dispatch(sendMessage('Loading...'))
    return fetch('./api/images')
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          dispatch(receiveImages(json))
          dispatch(dismissMessage())
        } else {
          dispatch(receiveNoImage())
          dispatch(sendMessage('No screens found, please try again.'))
        }
      })
      .catch(err => {
        const error = `No network connection, please check the server ${err}`
        dispatch(sendMessage(error))
      })
  }
}

export function fetchImagesIfNeed() {
  return dispatch => {
    return dispatch(fetchImages())
  }
}

export function sendMessages(message) {
  return dispatch => {
    dispatch(sendMessage(message))
  }
}
