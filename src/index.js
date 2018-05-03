const axios = require('axios')

const defaultPart = ['id', 'snippet']
const REQUIRED = '__YT_IS_REQUIRED__'

const APIMethods = {
  activities: {
    part: [...defaultPart, 'contentDetails'],
  },
  captions: {
    part: [...defaultPart],
    videoId: REQUIRED
  },
  channels: {
    part: [
      ...defaultPart,
      'localizations',
      'statistics',
      'status',
      'topicDetails'
    ]
  },
  channelSections: {
    part: [...defaultPart, 'localizations']
  },
  comments: {
    part: [...defaultPart]
  },
  commentThreads: {
    part: [...defaultPart]
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
    part: ['snippet']
  },
  subscriptions: {
    part: [...defaultPart, 'contentDetails']
  },
  videoAbuseReportReasons: {
    part: ['snippet']
  },
  videoCategories: {
    part: ['snippet']
  },
  videos: {
    part: [
      'contentDetails',
      'liveStreamingDetails',
      'localizations',
      'player',
      'recordingDetails',
      'statistics',
      'status',
      'topicDetails'
    ]
  }
}

class PicoTube {
  constructor (key) {
    if (!key) {
      throw(new Error('need an API key'))
    }
    this.key = key

    Object.keys(APIMethods).map(method => {
      this[method] = (args) => {
        const {part} = APIMethods[method]

        let params = Object.assign({}, {
          part: part,
          key: this.key
        }, args)

        params.part = params.part.join(',')

        return axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params
        })
      }
    })
  }
}

export {
  PicoTube as default,
  APIMethods
}
