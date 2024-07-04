// script.js

// API에서 데이터를 받아와 물 높이를 업데이트하는 함수
async function updateWaterLevel() {
  try {
    /* const response = await fetch('https://api.example.com/water-level'); // 실제 API URL로 변경하세요
    const data = await response.json();
    const waterLevel = data.waterLevel; // API에서 반환하는 물 높이 값에 맞게 변경하세요 */
    const waterLevel = 30;

    // 물 높이를 퍼센트로 계산하여 설정합니다.
    const water = document.getElementById("water");
    const waterLevelDisplay = document.getElementById("waterLevelDisplay");

    water.style.height = `${Math.max(0, Math.min(100, waterLevel))}%`;
    waterLevelDisplay.textContent = Math.max(0, Math.min(100, waterLevel));
  } catch (error) {
    console.error("Failed to update water level", error);
  }
}

// 주기적으로 API를 호출하여 물 높이를 업데이트합니다.
setInterval(updateWaterLevel, 5000); // 5초마다 업데이트
