const executionConfig=require('../executionConfig.json')

const getFeatureFile=()=>{
    let featureList=executionConfig.feature.trim();
    let featureFileList=[]
    if(featureList){
        featureList.includes('^')? featureList.split('^').map(item=>{
            let fileNameConstruct=`src/test/features/${item.trim()}.feature`
            featureFileList.push(fileNameConstruct)
        }):featureFileList.push(`src/test/features/${featureList}.feature`);
    }else{
        featureFileList.push(`src/test/features/`)
    }
      console.log(featureFileList)
      return featureFileList;

}
const getTags=()=>{
    let tags=''
    let value=executionConfig.testTag.trim();
    if(value){
        value='@'+value
        tags=value.includes('^')? value.replaceAll('^',' or @'): value;
    }
    console.log("Tag from execution config : ",tags)
    return tags;
}
module.exports={
    default:{
         formatOptions: {
      snippetInterface: "async-await"
    },
        tags:getTags(),
        paths:getFeatureFile(),
        dryRun:false,
        require:["src/test/steps/*.ts","src/hooks/cucumberHooks.ts"],
        requireModule:["ts-node/register"],
        format:[
           "html:test-output/cucumber-report.html",
           "json:test-output/cucumber-report.json",
           "rerun:@rerun.txt"
        ],
        parallel:1

    },
    rerun:{
        require:["src/test/steps/*.ts","src/hooks/cucumberHooks.ts"],
        requireModule:["ts-node/register"],
        format:[
            "progress-bar",
           "html:test-output/cucumber-report.html",
           "json:test-output/cucumber-report.json",
           "rerun:@rerun.txt"
        ],
        parallel:1

    }
}


