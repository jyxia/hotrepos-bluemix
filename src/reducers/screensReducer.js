import { RECEIVE_IMAGES, REQUEST_DEFAULT_IMAGES } from '../actions'

function getScreens(imageList) {
  return imageList.map(image => {
    return {
      imageurl: image.url,
      description: image.description
    }
  })
}

export default function imageList(state = [], action) {
  switch (action.type) {
  case REQUEST_DEFAULT_IMAGES:
    return []
  case RECEIVE_IMAGES:
    return getScreens(action.imageList)
  default:
    return state
  }
}
