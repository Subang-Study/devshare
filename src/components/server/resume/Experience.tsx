import ExperienceTitle from './ExperienceTitle'
import Titlename from './Titlename'

export default function Experience() {
  return (
    <div>
      <Titlename title="Experience" />
      <ExperienceTitle
        title="코드스테이츠"
        description="2,000여 명 이상이 참여한 국내 최초 코딩 부트캠프 스타트업으로 스트롱벤처스, 프라이머 등으로부터 투자 유치"
        period="2020.02-2020.05"
        content="마케팅부터 최종 결제까지의 퍼널 전체 데이터를 보며 랜딩 페이지 기획/개발, 기존 홈페이지 대비 결제 전환율 250% 개선 전사가 동일한 데이터를 보며 일할 수 있도록 기본적인 데이터 인프라 세팅 및 대시보드 제작 단순 컨텐츠 변경을 위해 매번 마케팅팀이 개발팀에게 업무 요청을 해야했던 비효율적인 프로세스를 개선할 수 있도록 홈페이지를 webflow 플랫폼으로 이전"
      />
    </div>
  )
}
