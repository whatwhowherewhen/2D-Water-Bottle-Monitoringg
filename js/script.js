const y = 200; // 수통의 높이 (픽셀 단위)
const x = 150; // 센서의 높이 (픽셀 단위)

// API에서 데이터를 받아와 물 높이를 업데이트하는 함수
async function updateWaterLevel() {
  try {
    const response = await fetch("https://api.example.com/water-level"); // 실제 API URL로 변경하세요
    const data = await response.json();
    const z = data.distance; // 센서가 측정한 물과의 거리 (미터 단위)

    // distanceInPixels 계산 (예: 1센치를 1픽셀로 가정.)
    const distanceInPixels = z * 100;

    // 실제 물 높이 (픽셀 단위)
    const actualWaterHeight = x - distanceInPixels;

    // 물 높이를 퍼센트로 계산
    const waterLevel = Math.max(
      0,
      Math.min(100, (actualWaterHeight / y) * 100)
    );

    // 물 높이를 퍼센트로 계산하여 설정합니다.
    const water = document.getElementById("water");
    const waterLevelDisplay = document.getElementById("waterLevelDisplay");

    water.style.height = `${waterLevel}%`;
    waterLevelDisplay.textContent = Math.round(waterLevel);
  } catch (error) {
    //오류 발생시
    console.error("Failed to update water level", error);
  }
}

// 주기적으로 API를 호출하여 물 높이를 업데이트합니다.
setInterval(updateWaterLevel, 5000); // 5초마다 업데이트

/*  script.js (테스트용)

const y = 200; 
const x = 150;

function mockFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomDistance = Math.random() * (x / 100); // 
      resolve({
        json: () => Promise.resolve({ distance: randomDistance })
      });
    }, 1000); 
  });
}

async function updateWaterLevel() {
  try {
    const response = await mockFetch(); // 실제 API URL로 변경하세요
    const data = await response.json();
    const z = data.distance; // 센서가 측정한 물과의 거리 (미터 단위)
    
    // z 값을 cm 단위로 변환하고, 1 cm를 1 픽셀로 가정하여 픽셀 단위로 변환
    const distanceInPixels = z * 100;

    // 실제 물 높이 (픽셀 단위)
    const actualWaterHeight = x - distanceInPixels;

    // 물 높이를 퍼센트로 계산
    const waterLevel = Math.max(0, Math.min(100, (actualWaterHeight / y) * 100));

    // 물 높이를 퍼센트로 계산하여 설정합니다.
    const water = document.getElementById("water");
    const waterLevelDisplay = document.getElementById("waterLevelDisplay");
    
    water.style.height = `${waterLevel}%`;
    waterLevelDisplay.textContent = Math.round(waterLevel);
  } catch (error) {
    console.error("Failed to update water level", error);
  }
}

// 주기적으로 API를 호출하여 물 높이를 업데이트합니다.
setInterval(updateWaterLevel, 5000); // 5초마다 업데이트

// 초기 호출
updateWaterLevel();

 */
