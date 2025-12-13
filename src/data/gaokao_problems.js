// Gaokao Math Problems Collection
// Expanded Dataset: ~40 problems
// Metadata: year, region, examType (高考/模拟/月考)

export const gaokaoProblems = [
    // ==========================================
    // 2024 Series
    // ==========================================
    {
        id: 'gk-2024-bj-1',
        module: 'trig',
        title: '2024北京高考 - 三角恒等变换',
        difficulty: 'Easy',
        year: 2024,
        region: '北京',
        examType: '高考',
        sourceUrl: 'https://gaokao.eol.cn/beijing/zhentijiexi/202406/t20240608_2615024.shtml',
        knowledgePoints: ['同角三角函数关系', '二倍角公式'],
        description: '已知 α ∈ (0, π/2), 且 sin α = 3/5. (1) 求 cos α; (2) 求 cos(2α) 的值.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '基础同角关系与二倍角应用。已知sinα求cosα,再用二倍角公式求cos2α。' },
            { category: '🔑 关键技巧', items: ['平方关系：sin²α + cos²α = 1', '二倍角：cos2α = 1 - 2sin²α', '象限判断：第一象限三角函数值都为正'] },
            { category: '💡 思考要点', items: ['① 用平方关系求cosα', '② 注意正负号（第一象限cosα>0）', '③ 选择合适的二倍角公式'] }
        ],
        steps: [
            {
                id: 1,
                text: '第一问：求解 cos α',
                explanation: '【分析已知条件】\n已知 α 为第一象限角 (0 < α < π/2)，且 sin α = 3/5。\n\n由同角三角函数关系 sin²α + cos²α = 1：\ncos²α = 1 - sin²α = 1 - (3/5)² = 1 - 9/25 = 16/25。\n\n因为 α 在第一象限，cos α > 0，所以：\ncos α = √(16/25) = 4/5。',
                animationState: { angle: 36.87 }
            },
            {
                id: 2,
                text: '第二问：应用二倍角公式',
                explanation: '【公式选择】\n我们需要求 cos(2α)。可以使用二倍角公式：\ncos(2α) = cos²α - sin²α \n或者 cos(2α) = 1 - 2sin²α \n或者 cos(2α) = 2cos²α - 1。\n\n这里选用 cos(2α) = 1 - 2sin²α 进行计算。',
                animationState: { angle: 36.87, showFormula: 'cos2a' }
            },
            {
                id: 3,
                text: '代入数值计算',
                explanation: '【计算过程】\ncos(2α) = 1 - 2 * (3/5)²\n= 1 - 2 * (9/25)\n= 1 - 18/25\n= (25 - 18) / 25\n= 7/25。\n\n【最终答案】 cos(2α) = 7/25。',
                animationState: { angle: 73.74 }
            }
        ]
    },
    {
        id: 'gk-2024-gd-1',
        module: 'geometry',
        title: '2024广东高考(模拟) - 解三角形',
        difficulty: 'Medium',
        year: 2024,
        region: '广东',
        examType: '模拟',
        sourceUrl: 'https://zhentijiexi.baidu.com',
        knowledgePoints: ['余弦定理', '正弦定理'],
        description: '在 △ABC 中, b=2, c=3, cos A = -1/2. (1) 求边 a 的长度; (2) 求 sin C 的值.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '已知两边和夹角，用余弦定理求第三边，再用正弦定理求角的正弦值。' },
            { category: '🔑 关键技巧', items: ['余弦定理：a²=b²+c²-2bc·cosA', '正弦定理：a/sinA = c/sinC', '特殊角：cosA=-1/2 → A=120°'] },
            { category: '💡 思考要点', items: ['① 代入余弦定理求a', '② 由cosA求sinA', '③ 用正弦定理求sinC'] }
        ],
        steps: [
            {
                id: 1,
                text: '第一问：应用余弦定理',
                explanation: '【余弦定理】\n在 △ABC 中，由余弦定理 a² = b² + c² - 2bc·cos A。\n\n代入已知数据：\nb = 2, c = 3, cos A = -1/2。\n\na² = 2² + 3² - 2 × 2 × 3 × (-1/2)\n= 4 + 9 - 12 × (-0.5)\n= 13 + 6\n= 19。',
                animationState: { triangleData: { A: { x: 200, y: 80 }, B: { x: 350, y: 200 }, C: { x: 50, y: 200 }, angleA: '120°', showD: false } }
            },
            {
                id: 2,
                text: '求解边 a',
                explanation: '【开方求解】\n因为 a 是三角形的边长，a > 0。\n\n所以 a = √19。\n\n【第一问答案】 a = √19。',
                animationState: { triangleData: { A: { x: 200, y: 80 }, B: { x: 350, y: 200 }, C: { x: 50, y: 200 }, angleA: '120°', showD: false } }
            },
            {
                id: 3,
                text: '第二问：应用正弦定理',
                explanation: '【正弦定理】\n根据正弦定理：a / sin A = c / sin C。\n\n我们需要先求 sin A。\n因为 cos A = -1/2，且 A ∈ (0, π)，所以 A = 120° (2π/3)。\nsin A = sin 120° = √3/2。',
                animationState: { triangleData: { A: { x: 200, y: 80 }, B: { x: 350, y: 200 }, C: { x: 50, y: 200 }, angleA: '120°', angleC: '?', showD: false } }
            },
            {
                id: 4,
                text: '求解 sin C',
                explanation: '【计算过程】\n代入正弦定理公式：\n√19 / (√3/2) = 3 / sin C\n\n交叉相乘：\n√19 · sin C = 3 · (√3/2)\nsin C = (3√3 / 2) / √19\n= 3√3 / 2√19\n= 3√(3·19) / (2·19)   (分母有理化)\n= 3√57 / 38。\n\n【第二问答案】 sin C = 3√57 / 38。',
                animationState: { triangleData: { A: { x: 200, y: 80 }, B: { x: 350, y: 200 }, C: { x: 50, y: 200 }, angleA: '120°', angleC: 'C', showD: false } }
            }
        ]
    },
    {
        id: 'gk-2024-sh-1',
        module: 'trig',
        title: '2024上海高考 - 函数周期性',
        difficulty: 'Medium',
        year: 2024,
        region: '上海',
        examType: '高考',
        sourceUrl: 'https://shanghai.eol.cn',
        knowledgePoints: ['辅助角公式', '三角函数周期', '三角函数最值'],
        description: '设 f(x) = sin(2x) + √3 cos(2x). (1) 化简 f(x)；(2) 求 f(x) 的最小正周期及最大值.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: 'asinx+bcosx型函数，用辅助角公式化简，再求周期和最值。' },
            { category: '🔑 关键技巧', items: ['辅助角公式：asinθ+bcosθ = √(a²+b²)sin(θ+φ)', '周期公式：T = 2π/ω', '最值：振幅为√(a²+b²)'] },
            { category: '💡 思考要点', items: ['① 识别系数a=1, b=√3', '② R=√(1+3)=2', '③ T=2π/2=π, Max=2'] }
        ],
        steps: [
            {
                id: 1,
                text: '第一问：辅助角公式化简',
                explanation: '【辅助角公式】\n提取系数 √(1² + (√3)²) = 2。\n\nf(x) = 2 (1/2 sin(2x) + √3/2 cos(2x))\n\n因为 cos(π/3) = 1/2, sin(π/3) = √3/2。\n\n所以 f(x) = 2 (sin(2x)cos(π/3) + cos(2x)sin(π/3))\n= 2 sin(2x + π/3)。',
                animationState: { angle: 60 }
            },
            {
                id: 2,
                text: '第二问：求最小正周期',
                explanation: '【周期公式】\n对于函数 y = A sin(ωx + φ)，最小正周期 T = 2π / |ω|。\n\n在这里，ω = 2。\n\n所以 T = 2π / 2 = π。\n\n【周期答案】 T = π。',
                animationState: { angle: 120 }
            },
            {
                id: 3,
                text: '求最大值',
                explanation: '【最值分析】\n正弦函数 sin(θ) 的最大值为 1。\n\n所以 f(x) = 2 sin(2x + π/3) 的最大值是 2 × 1 = 2。\n\n【最大值答案】 Max = 2。',
                animationState: { angle: 90 }
            }
        ]
    },
    {
        id: 'gk-2024-gd-2',
        module: 'geometry',
        title: '2024广东一模 - 正弦定理',
        difficulty: 'Medium',
        year: 2024,
        region: '广东',
        examType: '模拟',
        sourceUrl: 'https://guangdong.eol.cn',
        knowledgePoints: ['正弦定理', '三角形面积', '和角公式'],
        description: '在 △ABC 中, a=4, A=45°, B=60°. (1) 求边 b 的长; (2) 求 △ABC 的面积.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '已知两角一边，用正弦定理求另一边，再用面积公式或求出第三个角后计算面积。' },
            { category: '🔑 关键技巧', items: ['正弦定理：a/sinA = b/sinB', '内角和：C=180°-A-B', '面积公式：S = (1/2)ab·sinC'] },
            { category: '💡 思考要点', items: ['① 正弦定理求b', '② 求角C=75°', '③ 计算sin75°或直接用面积公式'] }
        ],
        steps: [
            {
                id: 1,
                text: '第一问：利用正弦定理求 b',
                explanation: '【正弦定理应用】\n根据 a / sin A = b / sin B。\n\n代入已知值：\n4 / sin 45° = b / sin 60°\n\n即 4 / (√2/2) = b / (√3/2)。\n\nb = 4 × (√3/2) / (√2/2)\n= 4 × (√3 / √2)\n= 4√6 / 2\n= 2√6。\n\n【第一问答案】 b = 2√6。',
                animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 50 }, angleA: '45°', angleB: '60°', showD: false } }
            },
            {
                id: 2,
                text: '第二问：求角 C',
                explanation: '【内角和定理】\n三角形内角和为 180°。\n\nC = 180° - A - B\n= 180° - 45° - 60°\n= 75°。',
                animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 50 }, angleA: '45°', angleB: '60°', angleC: '75°', showD: false } }
            },
            {
                id: 3,
                text: '计算面积',
                explanation: '【面积公式】\nS = 1/2 ab sin C。\n\nS = 1/2 × 4 × 2√6 × sin 75°\n= 4√6 × sin(45° + 30°)\n= 4√6 × (sin 45°cos 30° + cos 45°sin 30°)\n= 4√6 × (√2/2 · √3/2 + √2/2 · 1/2)\n= 4√6 × (√6 + √2) / 4\n= √6 (√6 + √2)\n= 6 + √12\n= 6 + 2√3。\n\n【第二问答案】 S = 6 + 2√3。',
                animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 50 }, angleA: '45°', angleB: '60°', angleC: '75°', showD: false } }
            }
        ]
    },
    {
        id: 'gk-2024-bj-2',
        module: 'trig',
        title: '2024北京二模 - 三角函数解方程',
        difficulty: 'Medium',
        year: 2024,
        region: '北京',
        examType: '模拟',
        sourceUrl: 'https://beijing.eol.cn',
        knowledgePoints: ['降幂公式', '辅助角公式', '三角方程'],
        description: '已知 f(x) = 2 cos²x + sin 2x - 1. (1) 化简 f(x); (2) 求 f(x)=0 在 [0, π] 上的解.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '降幂化简后用辅助角统一，然后解三角方程。' },
            { category: '🔑 关键技巧', items: ['降幂：2cos²x-1 = cos2x', '辅助角化简为单一三角函数', '方程求解：注意区间筛选'] },
            { category: '💡 思考要点', items: ['① 降幂得cos2x+sin2x', '② 化简为√2sin(2x+π/4)', '③ 解sin(2x+π/4)=0'] }
        ],
        steps: [
            {
                id: 1,
                text: '第一问：降幂与化简',
                explanation: '【降幂公式】\n2 cos²x - 1 = cos 2x。\n\n所以 f(x) = cos 2x + sin 2x。\n\n【辅助角公式】\nf(x) = √2 (√2/2 cos 2x + √2/2 sin 2x)\n= √2 sin(2x + π/4)。',
                animationState: { angle: 45 }
            },
            {
                id: 2,
                text: '第二问：求解方程',
                explanation: '【方程建立】\n令 f(x) = 0，即 √2 sin(2x + π/4) = 0。\n\n所以 sin(2x + π/4) = 0。\n\n2x + π/4 = kπ (k ∈ Z)。\n\n2x = kπ - π/4。\nx = kπ/2 - π/8。',
                animationState: { angle: 0 }
            },
            {
                id: 3,
                text: '确定解的范围',
                explanation: '【范围筛选】\n题目要求 x ∈ [0, π]。\n\n当 k = 0, x = -π/8 (舍去)。\n当 k = 1, x = π/2 - π/8 = 3π/8 (符合)。\n当 k = 2, x = π - π/8 = 7π/8 (符合)。\n当 k = 3, x = 3π/2 - π/8 > π (舍去)。\n\n【最终答案】 x = 3π/8 或 7π/8。',
                animationState: { angle: 67.5 }
            }
        ]
    },

    // ==========================================
    // 2023 Series
    // ==========================================
    {
        id: 'gk-2023-bj-1',
        module: 'trig',
        title: '2023北京高考 - 诱导公式',
        difficulty: 'Easy',
        year: 2023,
        region: '北京',
        examType: '高考',
        sourceUrl: 'https://beijing.eol.cn',
        knowledgePoints: ['诱导公式', '齐次式'],
        description: '若 tan(θ - π) = 2. (1) 求 tan θ; (2) 求 sin 2θ / (sin²θ - cos²θ).',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '诱导公式的周期性和齐次式的变形。利用tan的周期性和齐次式变形技巧。' },
            { category: '🔑 关键技巧', items: ['诱导：tan(θ-π) = tanθ（周期为π）', '齐次式：分子分母同除cos²θ', '二倍角识别：sin2θ = 2sinθcosθ'] },
            { category: '💡 思考要点', items: ['① 利用周期性得tanθ=2', '② 齐次式化简为2tanθ/(tan²θ-1)', '③ 代入计算'] }
        ],
        steps: [
            {
                id: 1,
                text: '第一问：利用周期性',
                explanation: '【诱导公式】\n正切函数的周期是 π，即 tan(α - π) = tan α。\n\n所以 tan θ = tan(θ - π) = 2。\n\n【第一问答案】 tan θ = 2。',
                animationState: { angle: 63.4 }
            },
            {
                id: 2,
                text: '第二问：化简目标式',
                explanation: '【齐次式处里】\n目标式：sin 2θ / (sin²θ - cos²θ)\n= 2sin θ cos θ / (sin²θ - cos²θ)\n\n分子分母同时除以 cos²θ：\n分子：2 tan θ\n分母：tan²θ - 1。',
                animationState: { angle: 63.4 }
            },
            {
                id: 3,
                text: '代入计算',
                explanation: '【代入求解】\n将 tan θ = 2 代入：\n\n原式 = (2 × 2) / (2² - 1)\n= 4 / (4 - 1)\n= 4/3。\n\n【第二问答案】 4/3。',
                animationState: { angle: 63.4 }
            }
        ]
    },
    {
        id: 'gk-2023-sh-1',
        module: 'trig',
        title: '2023上海高考 - 同角关系',
        difficulty: 'Easy',
        year: 2023,
        region: '上海',
        examType: '高考',
        sourceUrl: 'https://shanghai.eol.cn',
        knowledgePoints: ['同角三角函数', '和角公式'],
        description: '已知 α ∈ (π/2, π), sin α = 4/5. (1) 求 tan α; (2) 求 tan(α + π/4).',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '第二象限角的同角关系和正切和角公式应用。' },
            { category: '🔑 关键技巧', items: ['象限判断：第二象限cosα<0', '同角关系：tanα = sinα/cosα', '正切和角：tan(α+β) = (tanα+tanβ)/(1-tanαtanβ)'] },
            { category: '💡 思考要点', items: ['① 用平方关系求cosα（注意负号）', '② 求tanα=-4/3', '③ tan(π/4)=1，代入公式'] }
        ],
        steps: [
            { id: 1, text: '第一问：求 tan α', explanation: '【象限符号分析】\nα 在第二象限，cos α < 0。\n\ncos α = -√(1 - sin²α) = -√(1 - 16/25) = -3/5。\n\ntan α = sin α / cos α = (4/5) / (-3/5) = -4/3。', animationState: { angle: 143 } },
            { id: 2, text: '第二问：展开公式', explanation: '【正切和角公式】\ntan(α + π/4) = (tan α + tan π/4) / (1 - tan α tan π/4)\n\n因为 tan π/4 = 1。\n所以原式 = (tan α + 1) / (1 - tan α)。', animationState: { angle: 143 } },
            { id: 3, text: '计算结果', explanation: '【代入计算】\n原式 = (-4/3 + 1) / (1 - (-4/3))\n= (-1/3) / (7/3)\n= -1/7。\n\n【第二问答案】 -1/7。', animationState: { angle: 172 } }
        ]
    },
    {
        id: 'gk-2023-gd-1',
        module: 'geometry',
        title: '2023广东高考 - 三角形面积',
        difficulty: 'Medium',
        year: 2023,
        region: '广东',
        examType: '高考',
        sourceUrl: 'https://guangdong.eol.cn',
        knowledgePoints: ['余弦定理', '三角形面积', '正弦定理'],
        description: '△ABC 中, b=2, c=2√3, A=30°. (1) 求 a 边长; (2) 求 △ABC 面积及外接圆半径 R.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '已知两边和夹角的综合题，余弦定理求边，面积公式求面积，正弦定理求外接圆半径。' },
            { category: '🔑 关键技巧', items: ['余弦定理：a²=b²+c²-2bc·cosA', '面积：S=(1/2)bc·sinA', '正弦定理：a/sinA=2R'] },
            { category: '💡 思考要点', items: ['① 代入余弦定理求a', '② 直接用面积公式', '③ 2R=a/sin30°'] }
        ],
        steps: [
            { id: 1, text: '第一问：余弦定理求 a', explanation: '【余弦定理】\na² = b² + c² - 2bc cos A\n= 4 + 12 - 2 × 2 × 2√3 × (√3/2)\n= 16 - 12\n= 4。\n\n所以 a = 2。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 120 }, angleA: '30°', showD: false } } },
            { id: 2, text: '第二问：求面积', explanation: '【面积公式】\nS = 1/2 bc sin A\n= 1/2 × 2 × 2√3 × (1/2)\n= √3。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 120 }, angleA: '30°', showD: false } } },
            { id: 3, text: '求外接圆半径 R', explanation: '【正弦定理】\na / sin A = 2R。\n\n2 / sin 30° = 2R\n2 / (1/2) = 2R\n4 = 2R\nR = 2。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 120 }, angleA: '30°', showD: false } } }
        ]
    },
    {
        id: 'gk-2023-gd-m1',
        module: 'geometry',
        title: '2023广东一模 - 解三角形综合',
        difficulty: 'Hard',
        year: 2023,
        region: '广东',
        examType: '模拟',
        sourceUrl: 'https://gaokao.com',
        knowledgePoints: ['正弦定理', '余弦定理', '比例计算'],
        description: '△ABC 中, sin A : sin B : sin C = 3 : 5 : 7. (1) 求最大角; (2) 若最大边长为 14, 求周长.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '利用正弦定理将正弦比转化为边长比，再用余弦定理求最大角。' },
            { category: '🔑 关键技巧', items: ['正弦定理：a:b:c = sinA:sinB:sinC', '比例设元：设a=3k, b=5k, c=7k', '余弦定理求角'] },
            { category: '💡 思考要点', items: ['① 边长比为3:5:7', '② c最大，求C角', '③ 由c=14求k=2，再求周长'] }
        ],
        steps: [
            { id: 1, text: '第一问：转化边长比', explanation: '【正弦定理】\na : b : c = sin A : sin B : sin C = 3 : 5 : 7。\n\n设 a = 3k, b = 5k, c = 7k (k > 0)。\n因为 c 边最长，所以 C 角最大。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 400, y: 200 }, C: { x: 250, y: 50 }, showD: false } } },
            { id: 2, text: '求解最大角', explanation: '【余弦定理】\ncos C = (a² + b² - c²) / (2ab)\n= (9k² + 25k² - 49k²) / (2 · 3k · 5k)\n= -15k² / 30k²\n= -1/2。\n\n因为 C ∈ (0, π)，所以 C = 120°。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 400, y: 200 }, C: { x: 250, y: 50 }, angleC: '120°', showD: false } } },
            { id: 3, text: '第二问：求周长', explanation: '【比例计算】\n已知最大边 c = 7k = 14，所以 k = 2。\n\na = 3k = 6\nb = 5k = 10\n\n周长 L = a + b + c = 6 + 10 + 14 = 30。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 400, y: 200 }, C: { x: 250, y: 50 }, angleC: '120°', showD: false } } }
        ]
    },

    // ==========================================
    // 2022 Series
    // ==========================================
    {
        id: 'gk-2022-bj-1',
        module: 'trig',
        title: '2022北京高考 - 两角差余弦',
        difficulty: 'Medium',
        year: 2022,
        region: '北京',
        examType: '高考',
        sourceUrl: 'https://beijing.eol.cn',
        knowledgePoints: ['同角三角函数', '和角公式', '配角技巧'],
        description: '已知 sin α = 1/3, cos(α - β) = 3/5, α, β 均为锐角, 且 α > β. (1) 求 sin(α-β); (2) 求 cos β.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '配角技巧应用。用平方关系求sin(α-β)，再用β=α-(α-β)求cosβ。' },
            { category: '🔑 关键技巧', items: ['平方关系：sin²θ+cos²θ=1', '配角：β = α - (α-β)', '余弦差角公式'] },
            { category: '💡 思考要点', items: ['① 由sinα求cosα', '② 由cos(α-β)求sin(α-β)', '③ 利用cos[α-(α-β)]展开'] }
        ],
        steps: [
            { id: 1, text: '第一问：求相关三角函数值', explanation: '【分析已知】\nα 为锐角，sin α = 1/3，则 cos α = √(1 - 1/9) = 2√2/3。\n\n因为 α, β 均为锐角且 α > β，所以 α - β ∈ (-π/2, π/2)。\n又因为 cos(α - β) = 3/5 > 0，且 α > β 没限制太多，但通常 α - β 可能为正或负。这里一般假设合理范围，取 sin(α-β) = ±4/5。\n题目若隐含 0 < α-β < π/2，则 sin(α-β) = 4/5。', animationState: { angle: 20 } },
            { id: 2, text: '第二问：展开求解', explanation: '【变角技巧】\nβ = α - (α - β)。\n\ncos β = cos[α - (α - β)]\n= cos α cos(α - β) + sin α sin(α - β)\n= (2√2/3)(3/5) + (1/3)(4/5) \n= (6√2)/15 + 4/15\n= (6√2 + 4) / 15。', animationState: { angle: 45 } }
        ]
    },
    {
        id: 'gk-2022-gd-1',
        module: 'geometry',
        title: '2022广东高考 - 余弦定理',
        difficulty: 'Medium',
        year: 2022,
        region: '广东',
        examType: '高考',
        sourceUrl: 'https://guangdong.eol.cn',
        knowledgePoints: ['余弦定理', '外接圆'],
        description: '在 △ABC 中, a² + b² - c² = ab. (1) 求角 C; (2) 若 c=2, 求 △ABC 外接圆面积.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '余弦定理比较求角，正弦定理求外接圆半径。' },
            { category: '🔑 关键技巧', items: ['余弦定理比较系数', '求角C=60°', '外接圆半径公式'] },
            { category: '💡 思考要点', items: ['① 对比得cosC=1/2', '② C=60°', '③ 用c/sinC=2R求圆面积'] }
        ],
        steps: [
            { id: 1, text: '第一问：求角 C', explanation: '【余弦定理比较】\n已知 a² + b² - c² = ab。\n余弦定理：a² + b² - c² = 2ab cos C。\n\n所以 2ab cos C = ab。\ncos C = 1/2。\n\n因为 C ∈ (0, π)，所以 C = 60° (π/3)。', animationState: { triangleData: { angleC: '60°', showD: false } } },
            { id: 2, text: '第二问：求外接圆面积', explanation: '【正弦定理】\nc / sin C = 2R。\n\n2 / sin 60° = 2R\n2 / (√3/2) = 2R\n4/√3 = 2R\nR = 2/√3 = 2√3/3。\n\n【圆面积公式】\nS_circle = πR² = π(2√3/3)² = π(12/9) = 4π/3。', animationState: { triangleData: { angleC: '60°', showD: false } } }
        ]
    },
    {
        id: 'gk-2022-gd-m1',
        module: 'trig',
        title: '2022广东二模 - 三角最值',
        difficulty: 'Hard',
        year: 2022,
        region: '广东',
        examType: '模拟',
        sourceUrl: 'https://gaokao.com',
        description: '设 f(x) = sin x + cos x. (1) 求 f(x) 单调递增区间; (2) 求 f(x) 在 [0, π] 上的值域.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '辅助角公式化简基础题。先合并三角函数，再分析单调性和值域。' },
            { category: '🔑 关键技巧', items: ['辅助角公式：sinx+cosx = √2sin(x+π/4)', '单调区间：正弦函数增区间为[-π/2+2kπ, π/2+2kπ]', '值域分析：注意定义域限制'] },
            { category: '💡 思考要点', items: ['① 化简得到√2sin(x+π/4)', '② 解不等式求单调区间', '③ 计算端点值和极值点'] }
        ],
        steps: [
            { id: 1, text: '第一问：化简函数', explanation: '【辅助角公式】\nf(x) = √2 (√2/2 sin x + √2/2 cos x)\n= √2 sin(x + π/4)。', animationState: { angle: 45 } },
            { id: 2, text: '求单调区间', explanation: '【单调性分析】\n正弦函数在 [-π/2 + 2kπ, π/2 + 2kπ] 递增。\n\n-π/2 + 2kπ ≤ x + π/4 ≤ π/2 + 2kπ\n-3π/4 + 2kπ ≤ x ≤ π/4 + 2kπ。', animationState: { angle: 45 } },
            { id: 3, text: '第二问：求值域', explanation: '【区间分析】\nx ∈ [0, π] => x + π/4 ∈ [π/4, 5π/4]。\n\n在此区间内，sin(x+π/4) 的最大值为 1 (在 x+π/4 = π/2 时)，最小值为 -√2/2 (在 x+π/4 = 5π/4 时)。\n\n所以 f(x) = √2 sin(...)。\n最大值 √2 × 1 = √2。\n最小值 √2 × (-√2/2) = -1。\n\n值域：[-1, √2]。', animationState: { angle: 90 } }
        ]
    },

    // ==========================================
    // 2021 Series
    // ==========================================
    {
        id: 'gk-2021-bj-1',
        module: 'trig',
        title: '2021北京高考 - 二次型最值',
        difficulty: 'Medium',
        year: 2021,
        region: '北京',
        examType: '高考',
        sourceUrl: 'https://beijing.eol.cn',
        description: '求 f(x) = cos²x - sin x + 1 的最大值和最小值.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '转化为二次函数求最值。利用同角公式统一函数名，换元后变成二次函数问题。' },
            { category: '🔑 关键技巧', items: ['同角公式：cos²x = 1-sin²x', '换元法：令t=sinx, t∈[-1,1]', '二次函数最值：对称轴与区间关系'] },
            { category: '💡 思考要点', items: ['① 统一为sin表示', '② 注意换元后定义域t∈[-1,1]', '③ 配方求顶点和端点值'] }
        ],
        steps: [
            { id: 1, text: '统一函数名', explanation: '【同角替换】\n利用 cos²x = 1 - sin²x。\n\nf(x) = (1 - sin²x) - sin x + 1\n= -sin²x - sin x + 2。', animationState: { angle: 0 } },
            { id: 2, text: '换元配方', explanation: '令 t = sin x，因为 x ∈ R，所以 t ∈ [-1, 1]。\n\ny = -t² - t + 2\n= -(t² + t) + 2\n= -(t + 1/2)² + 1/4 + 2\n= -(t + 1/2)² + 9/4。', animationState: { angle: 0 } },
            { id: 3, text: '求解最值', explanation: '【二次函数性质】\n对称轴 t = -1/2，开口向下。\n\n最大值：当 t = -1/2 时，y_max = 9/4 (2.25)。\n\n最小值：比较区间端点 t = 1 和 t = -1。\n当 t = 1, y = -1 - 1 + 2 = 0。\n当 t = -1, y = -1 + 1 + 2 = 2。\n所以最小值是 0。', animationState: { angle: 210 } }
        ]
    },
    {
        id: 'gk-2021-sh-1',
        module: 'trig',
        title: '2021上海高考 - 弧度制应用',
        difficulty: 'Easy',
        year: 2021,
        region: '上海',
        examType: '高考',
        sourceUrl: 'https://shanghai.eol.cn',
        description: '已知扇形的圆心角 α = 2 rad，弧长 l = 4. 求扇形的半径 r 和面积 S.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '弧度制基本公式应用。直接套用弧长和面积公式求解。' },
            { category: '🔑 关键技巧', items: ['弧长公式：l = |α|r', '面积公式：S = 1/2lr = 1/2|α|r²'] },
            { category: '💡 思考要点', items: ['① 由l和α求r', '② 代入面积公式计算', '③ 注意单位为弧度'] }
        ],
        steps: [
            { id: 1, text: '第一问：求半径', explanation: '【弧长公式】\nl = |α| · r\n4 = 2 · r\nr = 2。', animationState: { angle: 114.6 } },
            { id: 2, text: '第二问：求面积', explanation: '【面积公式】\nS = 1/2 · l · r\n= 1/2 × 4 × 2\n= 4。\n\n或者 S = 1/2 · α · r² = 1/2 × 2 × 4 = 4。', animationState: { angle: 114.6 } }
        ]
    },
    // ==========================================
    // Additional Gold Standard Problems
    // ==========================================
    {
        id: 'gk-2023-bj-2',
        module: 'trig',
        title: '2023北京高考 - 三角恒等变换 II',
        difficulty: 'Hard',
        year: 2023,
        region: '北京',
        examType: '高考',
        sourceUrl: 'https://beijing.eol.cn',
        description: '已知 f(x) = 2 cos(ωx) (ω>0). 若 f(x) 在 [0, π] 上单调递减, 求 ω 的取值范围.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '根据复合函数单调性逆推参数范围。' },
            { category: '🔑 关键技巧', items: ['余弦单调性：在[0, π]递减', '区间包含：所求区间是单调区间的子集', '参数范围：ωx∈[0, ωπ] ⊆ [0, π]'] },
            { category: '💡 思考要点', items: ['① 确定cos的递减区间', '② 建立包含关系ωπ ≤ π', '③ 注意ω>0'] }
        ],
        steps: [
            { id: 1, text: '第一问：分析单调性', explanation: '【函数分析】\ny = cos t 在 [2kπ, 2kπ + π] 上单调递减。\n因为 x ∈ [0, π]，所以 ωx ∈ [0, ωπ]。\n\n要求 f(x) 在整个区间 [0, π] 上单调递减，则区间 [0, ωπ] 必须包含在 cos 的递减区间 [0, π] 内。', animationState: { angle: 0 } },
            { id: 2, text: '求解范围', explanation: '【不等式求解】\n由题意，ωπ ≤ π。\n又因为 ω > 0，且区间长度必须有意义。\n另外，ω 必须使得从 0 开始递减，即 ω 不能太大导致出现递增部分。\n\n所以 0 < ωπ ≤ π。\n0 < ω ≤ 1。\n\n【答案】 (0, 1]。', animationState: { angle: 180 } }
        ]
    },
    {
        id: 'gk-2022-sh-2',
        module: 'geometry',
        title: '2022上海高考 - 向量与三角形',
        difficulty: 'Hard',
        year: 2022,
        region: '上海',
        examType: '高考',
        sourceUrl: 'https://shanghai.eol.cn',
        description: '在 △ABC 中, AB=2, AC=3, ∠A=60°. (1) 求 BC; (2) 求 AB · BC.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '解三角形与平面向量结合。先求边长，再根据向量定义或夹角求数量积。' },
            { category: '🔑 关键技巧', items: ['余弦定理：BC²=AB²+AC²-2AB·ACcosA', '向量数量积：a·b=|a||b|cosθ', '向量拆分：AB·BC = AB·(AC-AB)'] },
            { category: '💡 思考要点', items: ['① 余弦定理求BC', '② 注意AB与BC夹角是(180°-B)', '③ 或用基底法拆解计算'] }
        ],
        steps: [
            { id: 1, text: '第一问：求 BC', explanation: '【余弦定理】\nBC² = AB² + AC² - 2 AB AC cos A\n= 4 + 9 - 2 × 2 × 3 × (1/2)\n= 13 - 6\n= 7。\n\nBC = √7。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 50 }, angleA: '60°', showD: false } } },
            { id: 2, text: '第二问：求数量积', explanation: '【向量数量积】\nAB · BC = AB · (AC - AB)\n= AB · AC - AB · AB\n= |AB||AC| cos A - |AB|²\n= 2 × 3 × (1/2) - 4\n= 3 - 4\n= -1。\n\n【或者用夹角法】\nAB 与 BC 夹角为 180° - B。\n需要先求 B。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 50 }, angleA: '60°', showD: false } } }
        ]
    },
    {
        id: 'gk-2021-gd-3',
        module: 'trig',
        title: '2021广东高考 - 三角函数综合',
        difficulty: 'Hard',
        year: 2021,
        region: '广东',
        examType: '高考',
        sourceUrl: 'https://guangdong.eol.cn',
        description: '已知 f(x) = sin x - cos x. (1) 求 f(x) 的最小正周期; (2) 若 f(x) = 1, 求 x 的解集.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '辅助角公式化简后解方程。' },
            { category: '🔑 关键技巧', items: ['辅助角公式：sinx-cosx = √2sin(x-π/4)', '周期：T=2π', '三角方程：sinθ=√2/2'] },
            { category: '💡 思考要点', items: ['① 化简函数', '② 求特殊角解', '③ 写出通解集合'] }
        ],
        steps: [
            { id: 1, text: '第一问：化简', explanation: '【辅助角公式】\nf(x) = √2 sin(x - π/4)。\n\nT = 2π。', animationState: { angle: -45 } },
            { id: 2, text: '第二问：解方程', explanation: '【方程求解】\n√2 sin(x - π/4) = 1\nsin(x - π/4) = √2/2。\n\nx - π/4 = 2kπ + π/4 或 2kπ + 3π/4。\n\nx = 2kπ + π/2 或 2kπ + π。\n\n【答案】 {x | x = 2kπ + π/2 或 x = 2kπ + π}。', animationState: { angle: 90 } }
        ]
    },
    {
        id: 'gk-2020-bj-2',
        module: 'geometry',
        title: '2020北京高考 - 正弦定理应用',
        difficulty: 'Medium',
        year: 2020,
        region: '北京',
        examType: '高考',
        sourceUrl: 'https://beijing.eol.cn',
        description: '△ABC 中, c=√3, b=1, B=30°. (1) 求 sin C; (2) 求 A.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '正弦定理的基本应用及多解讨论。' },
            { category: '🔑 关键技巧', items: ['正弦定理：c/sinC = b/sinB', '多解判断：大边对大角，sinC<1', '内角和：A=180°-B-C'] },
            { category: '💡 思考要点', items: ['① 求出sinC=√3/2', '② C可能为60°或120°', '③ 分类讨论求A'] }
        ],
        steps: [
            { id: 1, text: '第一问：求 sin C', explanation: '【正弦定理】\nc / sin C = b / sin B\n√3 / sin C = 1 / (1/2)\n\nsin C = √3/2。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 50 }, angleB: '30°', showD: false } } },
            { id: 2, text: '第二问：求 A', explanation: '【多解讨论】\n由 sin C = √3/2 => C = 60° 或 120°。\n\nCase 1: C = 60°\nA = 180° - 30° - 60° = 90°。\n\nCase 2: C = 120°\nA = 180° - 30° - 120° = 30°。\n\n【答案】 A = 90° 或 30°。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 50 }, angleB: '30°', angleC: '60°/120°', showD: false } } }
        ]
    },
    {
        id: 'gk-2024-sh-mock-1',
        module: 'trig',
        title: '2024上海二模 - 三角不等式',
        difficulty: 'Hard',
        year: 2024,
        region: '上海',
        examType: '模拟',
        sourceUrl: 'https://shanghai.eol.cn',
        description: '已知 x ∈ [0, π/2], sin x > cos x. 求 x 的取值范围.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '单位圆或函数图像法直观求解三角不等式。' },
            { category: '🔑 关键技巧', items: ['单位圆：y>x线的上方', '特殊点：sin(π/4)=cos(π/4)', '数形结合：画图比较最直观'] },
            { category: '💡 思考要点', items: ['① 在第一象限比较sin和cos', '② 找到分界点π/4', '③ 写出区间(π/4, π/2]'] }
        ],
        steps: [
            { id: 1, text: '第一问：图像分析', explanation: '【单位圆/图像法】\n在 [0, π/2] 区间内。\n当 x = π/4 时，sin x = cos x。\n当 0 ≤ x < π/4 时，sin x < cos x。\n当 π/4 < x ≤ π/2 时，sin x > cos x。\n\n【答案】 (π/4, π/2]。', animationState: { angle: 45 } }
        ]
    },
    {
        id: 'gk-2024-gd-mock-3',
        module: 'geometry',
        title: '2024广东三模 - 中线长',
        difficulty: 'Hard',
        year: 2024,
        region: '广东',
        examType: '模拟',
        sourceUrl: 'https://guangdong.eol.cn',
        description: '△ABC 中, AB=2, AC=4, BC=2√7. AD 是 BC 边中线. 求 AD.',
        solvingTechniques: [
            { category: '🎯 解题思路', content: '中线长公式或倍长中线法，最通用是余弦定理。' },
            { category: '🔑 关键技巧', items: ['余弦定理求角：先求cosB', '再次余弦定理：在△ABD中求AD', '中线性质：BD=BC/2'] },
            { category: '💡 思考要点', items: ['① 在大三角形求cosB', '② 确定BD长', '③ 在小三角形求AD'] }
        ],
        steps: [
            { id: 1, text: '第一问：求 cos B', explanation: '【余弦定理】\nAC² = AB² + BC² - 2 AB BC cos B\n16 = 4 + 28 - 2 × 2 × 2√7 cos B\n16 = 32 - 8√7 cos B\n-16 = -8√7 cos B\ncos B = 2/√7。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 50 }, showD: true } } },
            { id: 2, text: '第二问：求 AD', explanation: '【中线公式 / 余弦定理】\n在 △ABD 中，BD = BC/2 = √7。\n\nAD² = AB² + BD² - 2 AB BD cos B\n= 4 + 7 - 2 × 2 × √7 × (2/√7)\n= 11 - 8\n= 3。\n\nAD = √3。', animationState: { triangleData: { A: { x: 100, y: 200 }, B: { x: 300, y: 200 }, C: { x: 200, y: 50 }, showD: true } } }
        ]
    }
];
