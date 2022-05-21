export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry{
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

/** Utilidades para exportar tipos, Pick:
 *  export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
 *  Omit: */
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
