# MediVision

MediVision contains:
- `medvision backend` for model inference/API logic
- `medvision frontend` for the web UI
- `medvision training` for ViT and U-Net training artifacts/code

## Project Structure

```text
medivision/
|- README.md
|- .gitignore
|- .gitattributes
|- Final-Documentation.pdf
|- PUBLISHED_IEEE_PAPER.pdf
|- dataset/
|  |- training.zip
|  `- testing.zip
|- medvision backend/
|  |- run_mode.py
|  |- requirements.txt
|  |- transformer.py
|  `- utils.py
|- medvision frontend/
|  |- package.json
|  |- vite.config.ts
|  `- src/
`- medvision training/
   |- unet/
   |  |- best_model(1).keras
   |  |- Brain_Tumor_Notebook.ipynb
   |  `- Test_Notebook.ipynb
   `- vit/
      |- best_model.pth
      |- train.py
      |- test.py
      `- requirements.txt
```

## Prerequisites

- Python 3.10+ (recommended for backend/training)
- Node.js 18+ and npm (for frontend)

## Backend Run Steps

1. Open a terminal in `medvision backend`
2. Create and activate virtual environment (optional if already created):
   - Windows PowerShell:
     - `python -m venv venv`
     - `.\venv\Scripts\Activate.ps1`
3. Install backend dependencies:
   - `pip install -r requirements.txt`
4. Run backend script:
   - `python run_mode.py`

## Frontend Run Steps

1. Open a terminal in `medvision frontend`
2. Install dependencies:
   - `npm install`
3. Start dev server:
   - `npm run dev`
4. Open the URL shown in terminal (usually `http://localhost:5173`)

## Training Content Included

- ViT model: `medvision training/vit/best_model.pth`
- U-Net model: `medvision training/unet/best_model(1).keras`

## Notes

- Large model files are tracked with Git LFS.
- Dataset image archives are excluded from git to keep repository size manageable.
