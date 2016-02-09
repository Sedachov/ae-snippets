amp = 0.05; 
freq = 2.0; 
decay = 5.0; 

if (numKeys > 0) 
{ 
    n = nearestKey(time).index; 
    if (key(n).time > time) {n--;} 
}

if (n==0){t=0;}
else{t = time - key(n).time;}

result = value; 
if (n>0) 
{ 
    v = velocityAtTime(key(n).time - 0.04); 
    result += v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t); 
} 
result;
