import React, { useState } from 'react';
import { CheckCircle, XCircle, BookOpen, Award, RotateCcw, Eye, EyeOff, BookOpenCheck } from 'lucide-react';

const ChemistryTest = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [showMcqResults, setShowMcqResults] = useState(false);
  const [showAnswers, setShowAnswers] = useState({});

  // MCQ Questions - Common repeated topics from UP Board
  const mcqQuestions = [
    {
      id: 1,
      question: "Which of the following is an example of 12-16 compound semiconductor?",
      options: ["ZnS", "CdS", "Both a and b", "None"],
      correct: 2,
      topic: "Solid State"
    },
    {
      id: 2,
      question: "The unit of rate constant for zero order reaction is:",
      options: ["mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "s⁻¹", "L² mol⁻² s⁻¹"],
      correct: 0,
      topic: "Chemical Kinetics"
    },
    {
      id: 3,
      question: "Ebullioscopic constant depends on:",
      options: ["Nature of solute", "Nature of solvent", "Temperature", "Pressure"],
      correct: 1,
      topic: "Solutions"
    },
    {
      id: 4,
      question: "The oxidation state of Cr in K₂Cr₂O₇ is:",
      options: ["+4", "+5", "+6", "+7"],
      correct: 2,
      topic: "Coordination Compounds"
    },
    {
      id: 5,
      question: "Lucas reagent is a mixture of:",
      options: ["Conc. HCl and ZnCl₂", "Conc. HNO₃ and ZnCl₂", "Dil. HCl and ZnCl₂", "Conc. H₂SO₄ and ZnCl₂"],
      correct: 0,
      topic: "Alcohols, Phenols and Ethers"
    },
    {
      id: 6,
      question: "Glucose on prolonged heating with HI gives:",
      options: ["Methane", "Ethane", "n-Hexane", "Propane"],
      correct: 2,
      topic: "Biomolecules"
    },
    {
      id: 7,
      question: "The standard electrode potential E° for the half cells are: Zn²⁺/Zn = -0.76V, Cu²⁺/Cu = 0.34V. The EMF of the cell is:",
      options: ["1.10 V", "-1.10 V", "0.42 V", "-0.42 V"],
      correct: 0,
      topic: "Electrochemistry"
    },
    {
      id: 8,
      question: "Which of the following has highest pKb value?",
      options: ["C₆H₅NH₂", "(C₂H₅)₂NH", "C₂H₅NH₂", "NH₃"],
      correct: 0,
      topic: "Amines"
    },
    {
      id: 9,
      question: "Nylon-6,6 is a:",
      options: ["Polyamide", "Polyester", "Polysaccharide", "Polyethylene"],
      correct: 0,
      topic: "Polymers"
    },
    {
      id: 10,
      question: "Tyndall effect is shown by:",
      options: ["True solution", "Colloidal solution", "Suspension", "Precipitate"],
      correct: 1,
      topic: "Surface Chemistry"
    },
    {
      id: 11,
      question: "SN2 reaction mechanism is followed by:",
      options: ["Primary alkyl halides", "Secondary alkyl halides", "Tertiary alkyl halides", "All of these"],
      correct: 0,
      topic: "Haloalkanes and Haloarenes"
    },
    {
      id: 12,
      question: "Fehling's solution test is given by:",
      options: ["All aldehydes", "All ketones", "Aliphatic aldehydes", "Aromatic aldehydes"],
      correct: 2,
      topic: "Aldehydes and Ketones"
    },
    {
      id: 13,
      question: "The number of carbon atoms in one molecule of glucose is:",
      options: ["4", "5", "6", "7"],
      correct: 2,
      topic: "Biomolecules"
    },
    {
      id: 14,
      question: "Aspirin is chemically:",
      options: ["Methyl salicylate", "Acetyl salicylic acid", "Phenyl salicylate", "Salicylic acid"],
      correct: 1,
      topic: "Chemistry in Everyday Life"
    },
    {
      id: 15,
      question: "The total number of isomers for [Co(en)₂Cl₂]⁺ is:",
      options: ["2", "3", "4", "5"],
      correct: 1,
      topic: "Coordination Compounds"
    },
    {
      id: 16,
      question: "The correct IUPAC name of CH₃COCH₂COOH is:",
      options: ["3-Oxobutanoic acid", "4-Oxobutanoic acid", "2-Acetylacetic acid", "Acetoacetic acid"],
      correct: 0,
      topic: "Carboxylic Acids"
    },
    {
      id: 17,
      question: "In FCC unit cell, the number of atoms per unit cell is:",
      options: ["1", "2", "4", "6"],
      correct: 2,
      topic: "Solid State"
    },
    {
      id: 18,
      question: "Osmotic pressure of a solution is:",
      options: ["Directly proportional to concentration", "Inversely proportional to concentration", "Independent of concentration", "None of these"],
      correct: 0,
      topic: "Solutions"
    },
    {
      id: 19,
      question: "Bakelite is obtained from:",
      options: ["Phenol and formaldehyde", "Ethylene glycol and phthalic acid", "Urea and formaldehyde", "Phenol and chloroform"],
      correct: 0,
      topic: "Polymers"
    },
    {
      id: 20,
      question: "The order of reaction having rate constant with unit L² mol⁻² s⁻¹ is:",
      options: ["0", "1", "2", "3"],
      correct: 3,
      topic: "Chemical Kinetics"
    }
  ];

  // Descriptive Questions with Answers
  const descriptiveQuestions = [
    {
      id: 1,
      question: "Define molar conductivity. How does it vary with concentration for strong and weak electrolytes?",
      answer: "Molar conductivity (Λm) is defined as the conductivity of an electrolyte solution divided by the molar concentration of the electrolyte. It is expressed as Λm = κ/C, where κ is the conductivity and C is the molar concentration.\n\nFor Strong Electrolytes:\n• Molar conductivity increases with decrease in concentration\n• The relationship is linear: Λm = Λ₀m - A√C (Kohlrausch's law)\n• At infinite dilution (C→0), Λm approaches limiting molar conductivity (Λ₀m)\n• Examples: NaCl, HCl, KNO₃\n\nFor Weak Electrolytes:\n• Molar conductivity also increases with decrease in concentration\n• The increase is very rapid, especially at low concentrations\n• This is because weak electrolytes ionize more at lower concentrations (Ostwald's dilution law)\n• The relationship is non-linear\n• Examples: CH₃COOH, NH₄OH",
      marks: 3,
      type: "short",
      topic: "Electrochemistry"
    },
    {
      id: 2,
      question: "Explain the mechanism of SN1 reaction with suitable example.",
      answer: "SN1 (Substitution Nucleophilic Unimolecular) reaction is a two-step mechanism:\n\nStep 1 - Formation of Carbocation (Slow, Rate-determining):\nThe leaving group departs, forming a planar carbocation intermediate.\n\nExample: tert-Butyl bromide\n(CH₃)₃C-Br → (CH₃)₃C⁺ + Br⁻\n\nStep 2 - Nucleophilic Attack (Fast):\nThe nucleophile attacks the carbocation from either side, forming the product.\n\n(CH₃)₃C⁺ + OH⁻ → (CH₃)₃C-OH\n\nCharacteristics:\n• Unimolecular (rate depends only on substrate concentration)\n• Rate = k[R-X] (first order)\n• Favored by tertiary alkyl halides\n• Proceeds through carbocation intermediate\n• Racemization occurs (partial or complete)\n• Favored in polar protic solvents\n\nExample: Hydrolysis of (CH₃)₃CBr with NaOH gives (CH₃)₃COH",
      marks: 3,
      type: "short",
      topic: "Haloalkanes"
    },
    {
      id: 3,
      question: "What are lyophilic and lyophobic colloids? Give one example of each.",
      answer: "Lyophilic Colloids (Solvent-loving):\n• Have strong affinity for the dispersion medium\n• Formed by direct mixing with the solvent\n• Stable and reversible\n• Cannot be easily coagulated\n• Examples: Gum in water, Starch in water, Gelatin in water, Rubber in benzene\n\nLyophobic Colloids (Solvent-hating):\n• Have little or no affinity for the dispersion medium\n• Unstable and irreversible\n• Require special methods for preparation\n• Can be easily coagulated by small amounts of electrolytes\n• Examples: Gold sol, Silver iodide sol, Arsenic sulphide sol, Ferric hydroxide sol\n\nKey Differences:\n• Lyophilic colloids are self-stabilized, lyophobic need stabilizers\n• Lyophilic form gel on cooling, lyophobic do not\n• Lyophilic are reversible, lyophobic are irreversible",
      marks: 2,
      type: "short",
      topic: "Surface Chemistry"
    },
    {
      id: 4,
      question: "Write the equation for the following reactions:\n(a) Reimer-Tiemann reaction\n(b) Kolbe's reaction",
      answer: "(a) Reimer-Tiemann Reaction:\nThis reaction is used to introduce aldehyde group (-CHO) in phenol ortho to -OH group.\n\nC₆H₅OH + CHCl₃ + 3NaOH → o-HOC₆H₄CHO + 3NaCl + H₂O\n(Phenol) (Chloroform) (Sodium salicylaldehyde)\n\nMechanism involves formation of dichlorocarbene (CCl₂) intermediate.\n\n(b) Kolbe's Reaction (Kolbe-Schmitt Reaction):\nThis reaction is used to prepare salicylic acid from phenol.\n\nC₆H₅ONa + CO₂ (under pressure, 400K) → o-HOC₆H₄COONa\n(Sodium phenoxide) (Sodium salicylate)\n\no-HOC₆H₄COONa + H⁺ → o-HOC₆H₄COOH\n(Salicylic acid)\n\nBoth reactions are important in organic synthesis for introducing -COOH and -CHO groups in aromatic compounds.",
      marks: 2,
      type: "short",
      topic: "Phenols"
    },
    {
      id: 5,
      question: "(a) What is lanthanoid contraction? What are its consequences?\n(b) Write the chemical equation for the preparation of K₂Cr₂O₇ from chromite ore.",
      answer: "(a) Lanthanoid Contraction:\nLanthanoid contraction is the gradual decrease in the atomic and ionic radii of lanthanoids (from La to Lu) due to imperfect shielding of 4f electrons.\n\nCauses:\n• As we move from La to Lu, 4f electrons are added\n• 4f electrons have poor shielding effect\n• Effective nuclear charge increases\n• This pulls electrons closer to nucleus\n\nConsequences:\n• Atomic radii of post-lanthanoid elements (5d series) are similar to 4d series elements\n• Zr and Hf have almost same radii\n• Nb and Ta, Mo and W have similar radii\n• Difficulty in separation of Zr-Hf, Nb-Ta pairs\n• Increased density in 5d series\n• Higher melting and boiling points of 5d elements compared to 4d\n\n(b) Preparation of K₂Cr₂O₇ from Chromite Ore:\n\nStep 1: Fusion with NaOH in presence of air\n4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ → 8Na₂CrO₄ + 2Fe₂O₃ + 8CO₂\n(Chromite ore)\n\nStep 2: Acidification with H₂SO₄\n2Na₂CrO₄ + H₂SO₄ → Na₂Cr₂O₇ + Na₂SO₄ + H₂O\n\nStep 3: Conversion to K₂Cr₂O₇\nNa₂Cr₂O₇ + 2KCl → K₂Cr₂O₇ + 2NaCl\n(Potassium dichromate)\n\nNote: K₂Cr₂O₇ is less soluble than Na₂Cr₂O₇, so it crystallizes out.",
      marks: 5,
      type: "long",
      topic: "d and f Block Elements"
    },
    {
      id: 6,
      question: "(a) Define the following terms:\n(i) Peptide linkage\n(ii) Denaturation of proteins\n(b) What are essential and non-essential amino acids? Give one example of each.",
      answer: "(a) Definitions:\n\n(i) Peptide Linkage:\n• A peptide linkage (or peptide bond) is an amide linkage formed between the carboxyl group (-COOH) of one amino acid and the amino group (-NH₂) of another amino acid\n• Formed by condensation reaction with loss of water molecule\n• Represented as -CO-NH-\n• It is a planar structure with partial double bond character\n• Example: When glycine and alanine combine, they form glycylalanine\n\nCH₃-CH(NH₂)-COOH + H₂N-CH₂-COOH → CH₃-CH(NH₂)-CO-NH-CH₂-COOH + H₂O\n\n(ii) Denaturation of Proteins:\n• Denaturation is the process of disruption of the secondary, tertiary, and quaternary structure of proteins\n• The primary structure (peptide bonds) remains intact\n• Caused by physical factors (heat, UV light, shaking) or chemical factors (acids, bases, organic solvents, heavy metal ions)\n• Results in loss of biological activity\n• Proteins become insoluble and coagulate\n• Examples: Curdling of milk, cooking of egg white, treatment with alcohols\n\n(b) Essential and Non-essential Amino Acids:\n\nEssential Amino Acids:\n• Cannot be synthesized by the human body\n• Must be obtained from diet\n• 9 essential amino acids for adults\n• Example: Valine, Leucine, Isoleucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Histidine\n• Example detail: Lysine - required for protein synthesis, found in meat, eggs, dairy products\n\nNon-essential Amino Acids:\n• Can be synthesized by the human body\n• Not required in diet\n• 11 non-essential amino acids\n• Example: Glycine, Alanine, Serine, Cysteine, Aspartic acid, Glutamic acid, Asparagine, Glutamine, Proline, Tyrosine, Arginine\n• Example detail: Glycine - simplest amino acid, can be synthesized from other amino acids or glucose",
      marks: 5,
      type: "long",
      topic: "Biomolecules"
    }
  ];

  const handleMcqAnswer = (questionId, optionIndex) => {
    if (!showMcqResults) {
      setMcqAnswers({...mcqAnswers, [questionId]: optionIndex});
    }
  };

  const calculateMcqScore = () => {
    let correct = 0;
    mcqQuestions.forEach(q => {
      if (mcqAnswers[q.id] === q.correct) {
        correct++;
      }
    });
    return correct;
  };

  const submitMcqTest = () => {
    setShowMcqResults(true);
    window.scrollTo(0, 0);
  };

  const resetTest = () => {
    setMcqAnswers({});
    setShowMcqResults(false);
    setShowAnswers({});
    setCurrentSection('home');
  };

  const toggleAnswer = (questionId) => {
    setShowAnswers({...showAnswers, [questionId]: !showAnswers[questionId]});
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 mb-6 relative">
          {/* Meme Images - Top Right (Responsive) */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex flex-row sm:flex-col gap-1 sm:gap-2 items-end z-10">
            <img 
              src="/study-meme.png" 
              alt="Study motivation meme" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-indigo-200"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <img 
              src="/confidence-meme.png" 
              alt="Confidence motivation" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-purple-200"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <div className="text-center mb-8 pr-20 sm:pr-28 md:pr-36 lg:pr-44">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-2">UP Board Class 12</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700 mb-4">Chemistry Practice Test</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Based on Previous 10 Years Most Repeated Questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div 
              onClick={() => setCurrentSection('mcq')}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-white">
                <CheckCircle className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">MCQ Section</h3>
                <p className="text-blue-100 mb-3">20 Multiple Choice Questions</p>
                <p className="text-sm text-blue-100">• Auto-graded instantly</p>
                <p className="text-sm text-blue-100">• Detailed score report</p>
              </div>
            </div>

            <div 
              onClick={() => setCurrentSection('descriptive')}
              className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-white">
                <BookOpenCheck className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Descriptive Section</h3>
                <p className="text-purple-100 mb-3">6 Short & Long Answer Questions</p>
                <p className="text-sm text-purple-100">• Learn with answers</p>
                <p className="text-sm text-purple-100">• Based on previous papers</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
              <BookOpen className="w-6 h-6 mr-2" />
              Topics Covered
            </h3>
            <div className="grid md:grid-cols-2 gap-2 text-gray-700">
              <div>• Solid State</div>
              <div>• Solutions</div>
              <div>• Electrochemistry</div>
              <div>• Chemical Kinetics</div>
              <div>• Surface Chemistry</div>
              <div>• Coordination Compounds</div>
              <div>• Haloalkanes & Haloarenes</div>
              <div>• Alcohols, Phenols & Ethers</div>
              <div>• Aldehydes & Ketones</div>
              <div>• Carboxylic Acids</div>
              <div>• Amines & Biomolecules</div>
              <div>• Polymers & Everyday Chemistry</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const McqSection = () => {
    const score = calculateMcqScore();
    const percentage = ((score / mcqQuestions.length) * 100).toFixed(1);
    const attempted = Object.keys(mcqAnswers).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-indigo-900">MCQ Section</h2>
              <button 
                onClick={() => setCurrentSection('home')}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Back to Home
              </button>
            </div>
            
            {!showMcqResults && (
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Instructions:</strong> Select the correct answer for each question. 
                  Click "Submit Test" when done to see your results.
                </p>
                <p className="text-indigo-600 font-semibold mt-2">
                  Questions Attempted: {attempted}/{mcqQuestions.length}
                </p>
              </div>
            )}

            {showMcqResults && (
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-green-300">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Test Results</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 mb-1">Score</p>
                    <p className="text-3xl font-bold text-indigo-600">{score}/{mcqQuestions.length}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 mb-1">Percentage</p>
                    <p className="text-3xl font-bold text-green-600">{percentage}%</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 mb-1">Grade</p>
                    <p className="text-3xl font-bold text-purple-600">
                      {percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : 'D'}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={resetTest}
                  className="w-full mt-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 font-semibold"
                >
                  <RotateCcw className="w-5 h-5" />
                  Retake Test
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {mcqQuestions.map((q, index) => (
              <div key={q.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-indigo-600 font-semibold mb-2">{q.topic}</p>
                    <p className="text-gray-800 font-medium text-lg">{q.question}</p>
                  </div>
                </div>
                
                <div className="space-y-3 ml-11">
                  {q.options.map((option, optIndex) => {
                    const isSelected = mcqAnswers[q.id] === optIndex;
                    const isCorrect = optIndex === q.correct;
                    const showCorrect = showMcqResults && isCorrect;
                    const showWrong = showMcqResults && isSelected && !isCorrect;
                    
                    return (
                      <div
                        key={optIndex}
                        onClick={() => handleMcqAnswer(q.id, optIndex)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          showCorrect ? 'bg-green-100 border-green-500' :
                          showWrong ? 'bg-red-100 border-red-500' :
                          isSelected ? 'bg-indigo-100 border-indigo-500' :
                          'bg-gray-50 border-gray-200 hover:border-indigo-300'
                        } ${showMcqResults ? 'cursor-default' : ''}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-800">{option}</span>
                          {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                          {showWrong && <XCircle className="w-5 h-5 text-red-600" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {!showMcqResults && (
            <div className="mt-8 bg-white rounded-xl shadow-xl p-6">
              <button 
                onClick={submitMcqTest}
                disabled={attempted < mcqQuestions.length}
                className={`w-full py-4 rounded-lg font-bold text-lg ${
                  attempted < mcqQuestions.length
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {attempted < mcqQuestions.length 
                  ? `Answer all questions (${attempted}/${mcqQuestions.length})` 
                  : 'Submit Test & View Results'
                }
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const DescriptiveSection = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-purple-900">Descriptive Section - Learning Mode</h2>
            <button 
              onClick={() => setCurrentSection('home')}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Back to Home
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-4 border-2 border-purple-200">
            <div className="flex items-start gap-3">
              <BookOpenCheck className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-800 font-semibold mb-1">
                  Learning Section - Questions with Answers
                </p>
                <p className="text-gray-700 text-sm">
                  Study these common questions from previous UP Board papers. Click on "Show Answer" to view the detailed solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {descriptiveQuestions.map((q, index) => (
            <div key={q.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  Q{index + 1}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-purple-600 font-semibold">{q.topic}</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {q.marks} Marks
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium text-lg whitespace-pre-line">{q.question}</p>
                </div>
              </div>
              
              <div className="mt-4 ml-11">
                <button
                  onClick={() => toggleAnswer(q.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors mb-4"
                >
                  {showAnswers[q.id] ? (
                    <>
                      <EyeOff className="w-5 h-5" />
                      Hide Answer
                    </>
                  ) : (
                    <>
                      <Eye className="w-5 h-5" />
                      Show Answer
                    </>
                  )}
                </button>
                
                {showAnswers[q.id] && (
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border-2 border-green-300">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <h4 className="text-lg font-bold text-green-800">Answer:</h4>
                    </div>
                    <div className="text-gray-800 whitespace-pre-line leading-relaxed">
                      {q.answer}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-xl p-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Study Tips:
            </h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Read each question carefully before viewing the answer</li>
              <li>• Try to recall the answer in your mind first, then check</li>
              <li>• Pay attention to chemical equations and formulas</li>
              <li>• Note the key points and important definitions</li>
              <li>• Revise these answers regularly before exams</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      {currentSection === 'home' && <HomePage />}
      {currentSection === 'mcq' && <McqSection />}
      {currentSection === 'descriptive' && <DescriptiveSection />}
    </div>
  );
};

export default ChemistryTest;