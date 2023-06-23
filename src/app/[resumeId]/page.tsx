import Profile from '@/components/server/Profile'
import Introduce from '@/components/server/Introduce'
import Skillset from '@/components/server/Skillset'
import Experience from '@/components/server/Experience'
import Study from '@/components/server/Study'

export default function Resume() {
  return (
    <div className="w-full max-w-[1024px] mx-auto">
      <Profile />
      <Introduce />
      <Skillset />
      <Experience />
      <Study />
    </div>
  )
}
