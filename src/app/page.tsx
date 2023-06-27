import Link from 'next/link'
import ResumeCardLoad from '@/components/server/main/ResumeCardLoad'

export default function Home() {
  return (
    <section className="flex flex-row flex-wrap justify-center w-full gap-6 p-4">
      <ResumeCardLoad />
      <ResumeCardLoad />
      <ResumeCardLoad />
      <ResumeCardLoad />
      <ResumeCardLoad />
      <ResumeCardLoad />
      <ResumeCardLoad />
      <ResumeCardLoad />
      <ResumeCardLoad />
      <ResumeCardLoad />
    </section>
  )
}
