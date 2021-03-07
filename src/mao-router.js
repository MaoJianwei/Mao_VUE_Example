import Vue from "vue"
import VueRouter from 'vue-router'
import DeviceControl from "@/components/DeviceControl";
import MaoCloudMonitor from "@/components/MaoCloudMonitor";

Vue.use(VueRouter)

export default new VueRouter({
        routes: [
            // {
            //     path: '/',
            //     components: {
            //         maoMain: DeviceControl,
            //     }
            // },
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
            }
        ]
    }
)