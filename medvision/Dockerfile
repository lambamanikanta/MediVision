# Use the official Python 3.10 slim image as a base image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the required Python packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the model files into the container
COPY models/ ./models/

# Expose the port that Gunicorn will run on
EXPOSE 8000

# Start Gunicorn server when the container launches
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]