import NewsList from '@/components/krisinformation/news/NewsList'
import WeatherWarningList from '@/components/vadervarning/WeatherWarningList'

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <NewsList />
      <WeatherWarningList />
    </main>
  )
}
