

function deal(matrix, blood) {
  let m = matrix.length, n = matrix[0].length;
  let dp = new Array(m).fill(0).map(v => new Array(n).fill('X'));
  dp[0][0] = blood;
  for(let i=1;i<m;i++) {
    if (matrix[i][0] === 'X' || (dp[i-1][0] === 1 && matrix[i][0] === -1) || dp[i-1][0] === 'X') {
      dp[i][0] = 'X';
    } else {
      dp[i][0] = dp[i-1][0] + matrix[i][0];
    }
  }

  for(let j=1;j<n;j++) {
    if (matrix[0][j] === 'X' || (dp[0][j-1] === 1 && matrix[0][j] === -1) || dp[0][j-1] === 'X') {
      dp[0][j] = 'X';
    } else {
      dp[0][j] = dp[0][j-1] + matrix[0][j];
    }
  }

  function judge(x,y) {
    let up,left;
    if (matrix[x][y] === 'X' || (dp[x][y-1] === 1 && matrix[x][y] === -1) || dp[x][y-1] === 'X') {
      up = 'X';
    } else {
      up = matrix[x][y] + dp[x][y-1];
    }
    if (matrix[x][y] === 'X' || (dp[x-1][y] === 1 && matrix[x][y] === -1) || dp[x-1][y] === 'X') {
      left = 'X';
    } else {
      left = matrix[x][y] + dp[x-1][y];
    }

    if (left === 'X' || up === 'X') {
      return 'X'
    } else if(left === 'X'){
      return up;
    } else if (up === 'X') {
      return left;
    } else {
      return Math.max(left, up);
    }
  }
  console.log(dp);

  for(let i=1;i<m;i++)
    for(let j=1;j<n;j++) {
      let x = judge(i,j);
      dp[i][j] = x
      console.log(x);
    }

  return dp[m-1][n-1];
}

let arr = [
  [0,1,-1,0],
  [-1,0,0,1],
  [1,'X',1,-1],
  [1,1,1,1]
]
console.log(deal(arr,1));