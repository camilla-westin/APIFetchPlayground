import NewsList from '@/components/krisinformation/news/NewsList'
import WarningList from '@/components/vadervarning/WarningList'

export default function Home() {
  return (
    <main className="p-24">
      <NewsList />
      <WarningList />
    </main>
  )
}
