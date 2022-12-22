import { RemoveTail } from './1RemoveTail'
export type GetRouteParameter<S extends string> = RemoveTail<
  RemoveTail<RemoveTail<S, `/${string}`>, `-${string}`>,
  `.${string}`
>;

// TODO:  这个参考2RemoveTail 逐层去除把字符串，先去掉 /  再去掉 - 最后去掉 .