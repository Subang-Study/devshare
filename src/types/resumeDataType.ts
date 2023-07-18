export interface IResumeData {
  author?: string
  userInfo?: IResumeUserInfo
  techStack?: IResumeTechStack[]
  categorys?: IResumeCategory[]
}

export interface IResumeUserInfo {
  userImage?: string
  sentense: string // 나를 소개하는 한문장
  position: string
  name: string
  introduction: string
  personal: IResumeUserPersonalInfo
}

export interface IResumeUserPersonalInfo {
  email: string
  phone: string
  channel: IResumeUserChannel[]
  address?: string
}

export interface IResumeUserChannel {
  title: string
  url: string
}

export interface IResumeTechStack {
  title: string
  description: string
}

export interface IResumeCategory {
  title: string
  detail: IResumeCategoryDetail[]
}

export interface IResumeCategoryDetail {
  title: string // 회사이름이나 프로젝트 이름
  period: (Date | null)[]
  content: {
    title: string // 세부 제목
    description: string // 내용
  }
}

// ? Initial Values

const initialResumeUserChannel: IResumeUserChannel = {
  title: '',
  url: '',
}

const initialResumeUserPersonalInfo: IResumeUserPersonalInfo = {
  email: '',
  phone: '',
  channel: [initialResumeUserChannel],
}

const initialResumeUserInfo: IResumeUserInfo = {
  userImage: '',
  name: '',
  sentense: '',
  position: '',
  introduction: '',
  personal: initialResumeUserPersonalInfo,
}

export const initialResumeTechStack: IResumeTechStack = {
  title: '',
  description: '',
}

export const initialResumeCategoryDetail: IResumeCategoryDetail = {
  title: '',
  period: [null, null],
  content: {
    title: '',
    description: '',
  },
}

export const initialResumeCategory: IResumeCategory = {
  title: '',
  detail: [initialResumeCategoryDetail],
}

export const initialResumeData: IResumeData = {
  userInfo: initialResumeUserInfo,
  techStack: [initialResumeTechStack],
  categorys: [initialResumeCategory],
}

export interface IUserImageResponse {
  url: string
  fields: {
    key: string
    bucket: string
    'X-Amz-Algorithm': string
    'X-Amz-Credential': string
    'X-Amz-Date': string
    Policy: string
    'X-Amz-Signature': string
  }
}
