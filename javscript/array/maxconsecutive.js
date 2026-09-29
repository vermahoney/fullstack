class solution{
    findmaxconsecutiveones(nums){
        let currentcount =0;
        let maxcount =0;

        for(const num of nums){
            if(num===1){
                currentcount++;
                maxcount =Math.max(maxcount, currentcount);
            }

            else{
            currentcount=0;
        }

        }
        return maxcount;
        
    }
}

const nums =[1,1,0,1,1,1];

const solution =new solution();

console.log(solution.findmaxconsecutiveones(nums));