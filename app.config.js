import 'dotenv/config'

export default {
  "expo": {
    "name": "EduSphere",
    "slug": "EduSphere",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      endpoint: process.env.APPWRITE_ENDPOINT,
      platform: process.env.APPWRITE_PLATFORM,
      projectId: process.env.APPWRITE_PROJECT_ID,
      databaseId: process.env.APPWRITE_DATABASE_ID,
      userCollectionId: process.env.APPWRITE_USER_COLLECTION_ID,
      bucketId:  process.env.PUBLIC_APPWRITE_BUCKET_ID
    },
  }
}