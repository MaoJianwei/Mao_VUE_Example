import { createRouter, createWebHashHistory } from 'vue-router'
import DeviceControl from "@/components/DeviceControl";
import MaoCloudMonitor from "@/components/MaoCloudMonitor";
import ONOS from "@/components/ONOS";

const maoRouter = createRouter(
    {
        history: createWebHashHistory(),
        routes: [
            {
                path: '/',
                components: {
                    maoMain: DeviceControl,
                }
            },
            {
                path: '/deviceControl',
                components: {
                    maoMain: DeviceControl,
                }
            },
            {
                path: '/cloudMonitor',
                components: {
                    maoMain: MaoCloudMonitor
                },
            },
            {
                path: '/onos',
                components: {
                    maoMain: ONOS
                }
            }
        ]
    }
)

export default maoRouter
