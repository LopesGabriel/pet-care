import { app } from './app'
import { getRemoteConfig } from 'firebase/remote-config'

const remoteConfig = getRemoteConfig(app)

export { remoteConfig }
