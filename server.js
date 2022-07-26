

const averaging=(key1,val1,i)=>{
  
  let j=1;
  let k=1;
  let prev=i-j
  let next=i+j
  
  
  while(output[day[prev]]==0){
    j+=1
    prev-=1
    if(prev < 0){
      prev+=7
    }
  }
  while(output[day[next]]==0){
    k+=1
    next+=1
    if(next>6){
      next-=7
    }
  }
  
  output[day[i]]=k*output[day[prev]]+j*output[day[next]];
  output[day[i]]/=j+k;
  return output[day[i]]
}


//T09:09:18.712Z
const dateToDay=(date)=>{
date=date+"T09:09:18.712Z"
date=new Date(date);
return date.getDay();
}
day=["monday",
"tuesday",
"wednesday",
"thursday",
"friday",
"saturday",
"sunday"
]
let output={
  "monday":0,
  "tuesday":0,
  "wednesday":0,
  "thursday":0,
  "friday":0,
  "saturday":0,
  "sunday":0,
}
let dayCount={
  "monday":0,
  "tuesday":1,
  "wednesday":2,
  "thursday":3,
  "friday":4,
  "saturday":5,
  "sunday":6,
}
let dey="";
const obj={
  "2022-07-25":6,
  "2022-07-26":-2,
  "2022-07-29":4,
  "2022-07-30":14,
  "2022-07-31":10,
  "2022-08-01":10,
}
let i=0;
for([key,val]of Object.entries(obj)){
  d=dateToDay(key);
  d-=1;
  if(d==-1){
    d=6
  }
  dey=day[d];
  output[dey]+=val
}
for([key1,val1] of Object.entries(output)){
  i+=1
  if(val1==0){
    output[day[i]]=averaging(key1,val1,i);
  }
}

console.log(output)

