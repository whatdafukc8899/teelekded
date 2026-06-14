// Thai dream keyword → lottery number mapping
// Format: { word, nums: [digits], category }
const DREAM_DICT = [
  // งู / Snake
  { word: 'งู', nums: [2,7], cat: 'สัตว์' },
  { word: 'งูสีดำ', nums: [2,7], cat: 'สัตว์' },
  { word: 'งูใหญ่', nums: [5,8], cat: 'สัตว์' },
  { word: 'งูเขียว', nums: [3,6], cat: 'สัตว์' },
  { word: 'งูขาว', nums: [1,6], cat: 'สัตว์' },
  { word: 'งูหลาม', nums: [5,8,3], cat: 'สัตว์' },
  { word: 'งูเห่า', nums: [7,2,9], cat: 'สัตว์' },
  // สัตว์อื่น / Other animals
  { word: 'ช้าง', nums: [8,0], cat: 'สัตว์' },
  { word: 'เสือ', nums: [4,7], cat: 'สัตว์' },
  { word: 'สิงห์', nums: [5,0], cat: 'สัตว์' },
  { word: 'วัว', nums: [3,6], cat: 'สัตว์' },
  { word: 'ควาย', nums: [3,8], cat: 'สัตว์' },
  { word: 'หมู', nums: [7,0], cat: 'สัตว์' },
  { word: 'หมา', nums: [5,2], cat: 'สัตว์' },
  { word: 'แมว', nums: [3,1], cat: 'สัตว์' },
  { word: 'ปลา', nums: [6,9], cat: 'สัตว์' },
  { word: 'กบ', nums: [4,9], cat: 'สัตว์' },
  { word: 'ตะขาบ', nums: [6,1], cat: 'สัตว์' },
  { word: 'แมงมุม', nums: [8,3], cat: 'สัตว์' },
  { word: 'ผึ้ง', nums: [1,6,4], cat: 'สัตว์' },
  { word: 'นก', nums: [9,5], cat: 'สัตว์' },
  { word: 'ไก่', nums: [4,7], cat: 'สัตว์' },
  { word: 'เป็ด', nums: [2,8], cat: 'สัตว์' },
  { word: 'หนู', nums: [1,4], cat: 'สัตว์' },
  { word: 'ลิง', nums: [6,3], cat: 'สัตว์' },
  { word: 'กระต่าย', nums: [0,5], cat: 'สัตว์' },
  { word: 'แก้ว', nums: [2,9], cat: 'วัตถุ' },
  { word: 'ม้า', nums: [7,4], cat: 'สัตว์' },
  { word: 'จระเข้', nums: [5,2], cat: 'สัตว์' },
  // สถานที่ / Places
  { word: 'บ้าน', nums: [1,4,9], cat: 'สถานที่' },
  { word: 'วัด', nums: [5,9], cat: 'สถานที่' },
  { word: 'โบสถ์', nums: [5,0], cat: 'สถานที่' },
  { word: 'ป่า', nums: [3,8], cat: 'สถานที่' },
  { word: 'น้ำ', nums: [6,1], cat: 'สถานที่' },
  { word: 'แม่น้ำ', nums: [6,9], cat: 'สถานที่' },
  { word: 'ทะเล', nums: [7,6], cat: 'สถานที่' },
  { word: 'ภูเขา', nums: [4,8], cat: 'สถานที่' },
  { word: 'ท้องฟ้า', nums: [1,7], cat: 'สถานที่' },
  { word: 'ถนน', nums: [2,6], cat: 'สถานที่' },
  { word: 'ตลาด', nums: [3,7], cat: 'สถานที่' },
  { word: 'โรงพยาบาล', nums: [1,5], cat: 'สถานที่' },
  // คน / People
  { word: 'คนแก่', nums: [5,9], cat: 'คน' },
  { word: 'ผู้เฒ่า', nums: [5,9], cat: 'คน' },
  { word: 'เด็ก', nums: [1,3], cat: 'คน' },
  { word: 'เด็กทารก', nums: [0,1], cat: 'คน' },
  { word: 'ผู้หญิง', nums: [6,9], cat: 'คน' },
  { word: 'ผู้ชาย', nums: [5,8], cat: 'คน' },
  { word: 'พระ', nums: [5,9], cat: 'คน' },
  { word: 'พระพุทธ', nums: [5,9,3], cat: 'คน' },
  { word: 'เทวดา', nums: [3,6,9], cat: 'คน' },
  { word: 'ผี', nums: [1,6], cat: 'คน' },
  { word: 'คนตาย', nums: [1,6,8], cat: 'คน' },
  // วัตถุ / Objects
  { word: 'ทอง', nums: [4,9], cat: 'วัตถุ' },
  { word: 'ทองคำ', nums: [4,9], cat: 'วัตถุ' },
  { word: 'เงิน', nums: [2,9], cat: 'วัตถุ' },
  { word: 'เพชร', nums: [3,8], cat: 'วัตถุ' },
  { word: 'ประตู', nums: [4,9], cat: 'วัตถุ' },
  { word: 'กุญแจ', nums: [1,8], cat: 'วัตถุ' },
  { word: 'ดาบ', nums: [7,2], cat: 'วัตถุ' },
  { word: 'ไฟ', nums: [3,6], cat: 'วัตถุ' },
  { word: 'ต้นไม้', nums: [5,0], cat: 'วัตถุ' },
  { word: 'ดอกไม้', nums: [3,8], cat: 'วัตถุ' },
  { word: 'รถ', nums: [2,7], cat: 'วัตถุ' },
  { word: 'เรือ', nums: [6,1], cat: 'วัตถุ' },
  { word: 'ดวงอาทิตย์', nums: [1,4], cat: 'ธรรมชาติ' },
  { word: 'ดวงจันทร์', nums: [0,5], cat: 'ธรรมชาติ' },
  { word: 'ดาว', nums: [3,8], cat: 'ธรรมชาติ' },
  { word: 'ฝน', nums: [6,9], cat: 'ธรรมชาติ' },
  { word: 'ลม', nums: [2,7], cat: 'ธรรมชาติ' },
  { word: 'หิมะ', nums: [0,5], cat: 'ธรรมชาติ' },
  { word: 'รุ้ง', nums: [3,7], cat: 'ธรรมชาติ' },
  { word: 'ฟ้าผ่า', nums: [1,6,8], cat: 'ธรรมชาติ' },
  { word: 'น้ำท่วม', nums: [2,3,5], cat: 'ธรรมชาติ' },
  // สัตว์เพิ่มเติม
  { word: 'หนอน', nums: [8,1,9], cat: 'สัตว์' },
  { word: 'งูกัด', nums: [4,5,9], cat: 'สัตว์' },
  { word: 'เต่า', nums: [4,5,3], cat: 'สัตว์' },
  { word: 'ปลิง', nums: [5,8,2], cat: 'สัตว์' },
  { word: 'มด', nums: [1,9,0], cat: 'สัตว์' },
  // คนเพิ่มเติม
  { word: 'เพื่อน', nums: [6,3,4], cat: 'คน' },
  { word: 'ตำรวจ', nums: [7,0,2], cat: 'คน' },
  { word: 'กษัตริย์', nums: [9,8,5], cat: 'คน' },
  // สิ่งศักดิ์สิทธิ์
  { word: 'พญานาค', nums: [5,6,9], cat: 'คน' },
  // วัตถุเพิ่มเติม
  { word: 'โลงศพ', nums: [4,0,4], cat: 'วัตถุ' },
  { word: 'ผลไม้', nums: [7,0,1], cat: 'วัตถุ' },
  { word: 'นม', nums: [8,0,2], cat: 'วัตถุ' },
  { word: 'ปืน', nums: [8,1,0], cat: 'วัตถุ' },
  { word: 'รองเท้า', nums: [5,6,7], cat: 'วัตถุ' },
  { word: 'เครื่องบิน', nums: [4,8,1], cat: 'วัตถุ' },
  { word: 'แหวน', nums: [0,9,8], cat: 'วัตถุ' },
  // ร่างกาย
  { word: 'เลือด', nums: [7,8,2], cat: 'ร่างกาย' },
  { word: 'ผม', nums: [1,9,6], cat: 'ร่างกาย' },
  // เหตุการณ์
  { word: 'งานศพ', nums: [4,7,2], cat: 'เหตุการณ์' },
  { word: 'ตัดผม', nums: [3,9,7], cat: 'เหตุการณ์' },
  { word: 'คลอดลูก', nums: [3,6,4], cat: 'เหตุการณ์' },
  { word: 'แต่งงาน', nums: [6,2,4], cat: 'เหตุการณ์' },
  { word: 'ทะเลาะ', nums: [7,1,9], cat: 'เหตุการณ์' },
  { word: 'ตาย', nums: [4,7,0], cat: 'เหตุการณ์' },
  // กิจกรรม
  { word: 'ร้องไห้', nums: [6,3,7], cat: 'กิจกรรม' },
  { word: 'อาบน้ำ', nums: [2,5,1], cat: 'กิจกรรม' },
];

function searchDream(text) {
  if (!text) return [];
  const found = [];
  const seen = new Set();
  // Try multi-word matches first (longest match)
  const sorted = [...DREAM_DICT].sort((a,b) => b.word.length - a.word.length);
  for (const entry of sorted) {
    if (text.includes(entry.word) && !seen.has(entry.word)) {
      found.push(entry);
      seen.add(entry.word);
    }
  }
  return found;
}

function buildResults(matches, extraNums = []) {
  // Collect all digits with frequency weighting
  const freq = {};
  for (const m of matches) {
    m.nums.forEach((n, i) => {
      freq[n] = (freq[n] || 0) + (i === 0 ? 3 : i === 1 ? 2 : 1);
    });
  }
  // Add extra nums from AI at lower weight
  extraNums.forEach(n => {
    freq[n] = (freq[n] || 0) + 1;
  });

  const sorted = Object.entries(freq)
    .sort((a,b) => b[1] - a[1])
    .map(([n]) => parseInt(n));

  const top = sorted.slice(0, 6);

  // Generate 2-digit combos from top 3 digits
  const t3 = top.slice(0, 3);
  const combos2 = [];
  for (let i = 0; i < t3.length; i++) {
    for (let j = 0; j < t3.length; j++) {
      if (i !== j) {
        const c = `${t3[i]}${t3[j]}`;
        if (!combos2.includes(c)) combos2.push(c);
      }
    }
  }

  // Generate 3-digit combos from top 3 digits
  const combos3 = [];
  const perms3 = permutations(t3);
  for (const p of perms3) {
    const c = p.join('');
    if (!combos3.includes(c)) combos3.push(c);
  }

  return {
    digits: top,
    combos2: combos2.slice(0, 6),
    combos3: combos3.slice(0, 4),
    top2: combos2.slice(0, 2),
    top3: combos3.slice(0, 1),
  };
}

function permutations(arr) {
  if (arr.length <= 1) return [arr];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i+1)];
    for (const p of permutations(rest)) {
      result.push([arr[i], ...p]);
    }
  }
  return result;
}

// Export for use in index.html (global scope)
if (typeof window !== 'undefined') {
  window.DREAM_DICT = DREAM_DICT;
  window.searchDream = searchDream;
  window.buildResults = buildResults;
}
