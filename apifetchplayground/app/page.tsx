import NewsList from '@/components/krisinformation/news/NewsList'
import WeatherWarningList from '@/components/vadervarning/WeatherWarningList'
import PolisList from '@/components/polisen/PolisList'

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <NewsList numofitems={1} />
      <WeatherWarningList numofitems={1} />
      <PolisList numofitems={1} />
    </main>
  )
}
