export interface BubbleContent {
  id: string
  title: string
  eyebrow: string
  body: string
}

export interface TimelineDay {
  title: string
  rows: [string, string][]
}

export interface NpcInfo {
  name: string
  role: string
  description: string
}

export interface ReviewItem {
  title: string
  description: string
}

export interface InfoRow {
  label: string
  value: string
}

export interface JoinCard {
  title: string
  description: string
}

export interface AudienceSectionData {
  title: string
  rows: string[]
}

export interface FooterSectionData {
  title: string
  body: string
  join: JoinCard[]
  buttons: string[]
  partners: string
}

export interface ContentData {
  aboutParagraphs: string[]
  keywordStatement: {
    marker: string
    title: string
    subtitles: string[]
    body: string
  }
  bubbles: BubbleContent[]
  timeline: TimelineDay[]
  rhythmNote: string
  info: InfoRow[]
  npcs: NpcInfo[]
  quietManifesto: string
  reviews: {
    projects: ReviewItem[]
    members: ReviewItem[]
  }
  audience: AudienceSectionData
  footer: FooterSectionData
}
