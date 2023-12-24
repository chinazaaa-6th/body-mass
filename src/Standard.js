import React from "react";

export default function Standard() {
  return (
    <div className="Standard">
        <h5>STANDARD</h5>
      <div class="section mt-5">
        <h6>Gender</h6>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label" for="inlineRadio1">
            F
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label" for="inlineRadio2">
            M
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col text-lg-start">
          <label for="stand-weight" class="col-form-label">
            Your Weight:
          </label>
        </div>
        <div class="col">
          <input
            type="text"
            id="stand-weight"
            class="form-control"
            placeholder="Pounds"
          />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col text-lg-start">
          <label for="stand-height" class="">
            Your Height:
          </label>
        </div>
        <div class="col">
          <input
            type="text"
            id="stand-height"
            class="form-control"
            placeholder="Inches"
          />
        </div>
      </div>
      <button class="builtin mt-5 text-center" id="stn">
        Calculate BMI
      </button>
      <footer>
        <h6>
          Your BMI:<small id="standard"></small>
          <p id="stand-alert"></p>
        </h6>
      </footer>
    </div>
  );
}
