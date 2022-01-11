import {request} from './request'

export function getDetailData(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(iid){
  return request({
    url:'/recommend'
  })
}


export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title,
    this.desc = itemInfo.desc,
    this.newPrice = itemInfo.lowNowPrice,
    this.oldPrice = itemInfo.oldPrice,
    this.discountDesc = itemInfo.discountDesc,
    this.discountBgColor = itemInfo.discountBgColor,
    this.columns =  columns,
    this.services = services,
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class itemParams{
  constructor(info,rule){
    this.set = info.set,
    this.tables = rule.tables
    this.image = info.images ? info.images:""
  }
}