const y = 20; // 수통의 실제 높이 (cm 단위)
const x = 15; // 센서의 실제 높이 (cm 단위)
const scale = 10; // 1cm를 10px로 변환

// API에서 데이터를 받아와 물 높이를 업데이트하는 함수
async function updateWaterLevel() {
  try {
    const response = await fetch("https://api.example.com/water-level"); // 실제 API URL로 변경하세요
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const z = data.distance; // 센서가 측정한 물과의 거리 (cm 단위)

    // 실제 물 높이 (cm 단위)
    const actualWaterHeight = x - z;

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
    console.error("Failed to update water level", error);
  }
}

// 주기적으로 API를 호출하여 물 높이를 업데이트합니다.
setInterval(updateWaterLevel, 5000); // 5초마다 업데이트

// 초기 호출
updateWaterLevel();

/*(테스트용)
const y = 20; // 수통의 실제 높이 (cm 단위)
const x = 15; // 센서의 실제 높이 (cm 단위)
const scale = 10; // 1cm를 10px로 변환

// 임의의 데이터를 제공하는 함수 (테스트용)
function mockFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomDistance = Math.random() * x; // 센서에서 물까지의 거리 (0부터 x까지 랜덤 값)
      resolve({
        json: () => Promise.resolve({ distance: randomDistance }),
      });
    }, 1000); // 1초 후 데이터를 반환
  });
}

// API에서 데이터를 받아와 물 높이를 업데이트하는 함수
async function updateWaterLevel() {
  try {
    const response = await mockFetch(); // 실제 API URL로 변경하세요
    const data = await response.json();
    const z = data.distance; // 센서가 측정한 물과의 거리 (cm 단위)

    // 실제 물 높이 (cm 단위)
    const actualWaterHeight = x - z;

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
    console.error("Failed to update water level", error);
  }
}

// 주기적으로 API를 호출하여 물 높이를 업데이트합니다.
setInterval(updateWaterLevel, 1000); // 1초마다 업데이트

// 초기 호출
updateWaterLevel();
*/
