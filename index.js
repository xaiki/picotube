const axios = require('axios')

const defaultPart = ['id', 'snippet']
const REQUIRED = '__YT_IS_REQUIRED__'

const APIMethods = {
  activities: {
    part: [...defaultPart, 'contentDetails']
  },
  captions: {
    part: [...defaultPart],
    videoId: REQUIRED
  },
  channels: {
    part: [
      ...defaultPart,
      'auditDetails',
      'brandingSettings',
      'contentOwnerDetails',
      'localizations',
      'statistics',
      'status',
      'topicDetails'
    ]
  },
  channelSections: {
    part: [...defaultPart, 'localizations', 'targeting']
  },
  comments: {
    part: [...defaultPart]
  },
  commentThreads: {
    part: [...defaultPart, 'replies']
  },
  guideCategories: {
    part: ['snippet']
  },
  i18nLanguages: {
    part: ['snippet']
  },
  i18nRegions: {
    part: ['snippet']
  },
  playlistItems: {
    part: [...defaultPart, 'contentDetails', 'status']
  },
  playlists: {
    part: [...defaultPart, 'contentDetails', 'localizations', 'player', 'status']
  },
  search: {
    part: REQUIRED
  },
  subscriptions: {
    part: [...defaultPart, 'contentDetails', 'subscriberSnippet']
  },
  videoAbuseReportReasons: {
    part: REQUIRED
  },
  videoCategories: {
    part: ['snippet']
  }
  videos: {
    part: [
      'contentDetails',
      'fileDetails',
      'liveStreamingDetails',
      'localizations',
      'player',
      'processingDetails',
      'recordingDetails',
      'statistics',
      'status',
      'suggestions',
      'topicDetails',
    ]
  }
}

class PicoTube {
  constructor (key) {
    this.key = key

    Object.keys(APIMethods).map(method => {
      this[method] = (args) => {
        const {part} = APIMethods[method]

        let params = Object.assign({}, {
          part: part,
          key: this.key
        }, args)

        parms.part = params.part.join(',')

        return axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params
        })
      }
    })
  }
}

module.exports = PicoTube
