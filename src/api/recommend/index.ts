import Http from "../request"


const REQUEST_URL = {
  banner: '/banner',
  playList: '/personalized',
  ownerSend: '/personalized/privatecontent',
  newSong: '/personalized/newsong',
  mv: '/personalized/mv'
}

// 获取轮播图
export const getBanners = () => {
  return Http.get(REQUEST_URL.banner).then()
}
