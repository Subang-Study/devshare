export interface IResumeData {
  userInfo?: {
    userImage: string
    sentense: string // 나를 소개하는 한문장
    position: string
    name: string
    introduction: string
    personal: {
      email: string
      phone: string
      address?: string
      channel: IResumeUserChannel[] // 추가적인 url (github, blog ...)
    }
  }
  techStack?: IResumeTechStack[]
  categorys?: IResumeCategory[]
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
  detail: {
    title: string // 회사이름이나 프로젝트 이름
    period: string // 기간
    content: {
      title: string // 세부 제목
      description: string // 내용
    }
  }[]
}
