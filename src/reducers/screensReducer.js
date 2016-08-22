import { RECEIVE_IMAGES } from '../actions'

function getScreens(images) {
  return images.map(image => {
    return {
      imageurl: image.url,
      description: image.description
    }
  })
}

export default function imageList(state = [], action) {
  switch (action.type) {
  case RECEIVE_IMAGES:
    return getScreens(action.imageList)
  default:
    return state
  }
}
