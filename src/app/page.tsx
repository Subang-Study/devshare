import ResumeCardList from '@/components/client/main/ResumeCardList'

export default function Home() {
  return (
    <section className="grid w-full grid-cols-2 gap-6 p-4 max-sm:grid-cols-1">
      <ResumeCardList />
    </section>
  )
}
