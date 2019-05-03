const { expect, use } = require('chai');
const dirtyChai = require('dirty-chai');
const chaiAsPromised = require('chai-as-promised');
const DashApiOptions = require('@dashevo/dp-services-ctl/lib/services/driveApi/DriveApiOptions');
const DashSyncOptions = require('@dashevo/dp-services-ctl/lib/services/driveSync/DriveSyncOptions');
const DapiCoreOptions = require('@dashevo/dp-services-ctl/lib/services/dapi/core/DapiCoreOptions');
const DapiTxFilterStreamOptions = require('@dashevo/dp-services-ctl/lib/services/dapi/txFilterStream/DapiTxFilterStreamOptions');
const DashCoreOptions = require('@dashevo/dp-services-ctl/lib/services/dashCore/DashCoreOptions');
const InsightApiOptions = require('@dashevo/dp-services-ctl/lib/services/insightApi/InsightApiOptions');

use(chaiAsPromised);
use(dirtyChai);

if (process.env.SERVICE_IMAGE_CORE) {
    DashCoreOptions.setDefaultCustomOptions({
        container: {
            image: process.env.SERVICE_IMAGE_CORE,
        },
    });
}

if (process.env.SERVICE_IMAGE_DAPI) {
    DapiCoreOptions.setDefaultCustomOptions({
        container: {
            image: process.env.SERVICE_IMAGE_DAPI,
        },
    });
    DapiTxFilterStreamOptions.setDefaultCustomOptions({
        container: {
            image: process.env.SERVICE_IMAGE_DAPI,
        },
    });
}

if (process.env.SERVICE_IMAGE_INSIGHT) {
    InsightApiOptions.setDefaultCustomOptions({
        container: {
            image: process.env.SERVICE_IMAGE_INSIGHT,
        },
    });
}

if (process.env.SERVICE_IMAGE_DRIVE) {
     DashApiOptions.setDefaultCustomOptions({
        container: {
            image: process.env.SERVICE_IMAGE_DRIVE,
        },
    });
}

if (process.env.SERVICE_IMAGE_DRIVE) {
    DashSyncOptions.setDefaultCustomOptions({
        container: {
            image: process.env.SERVICE_IMAGE_DRIVE,
        },
    });
}


global.expect = expect;
