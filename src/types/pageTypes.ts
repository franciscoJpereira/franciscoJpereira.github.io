interface TimelineDot {
    contentTitle: String,
    contentOposite: String,
    content: String
}

export interface AboutInfo {
    paragraphs: Array<String>,
    title: String,
    timelineTitle: String,
    timeline: Array<TimelineDot>
}
