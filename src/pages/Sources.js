import SourceFlippy from "../modules/SourceFlippy";

function Sources() {
  return (
    <div>
      <div class="container text-center  margin-top">
        <div class="oswaldfont margin-top">
          <h1>Sources</h1>
        </div>
      </div>

      <div class="container text-center itemSpacing ">
        <div class="oswaldfont text-white">
          <SourceFlippy
            title="Really Great Source"
            description="http://Irrelevant source/sources"
          ></SourceFlippy>
          <SourceFlippy
            title="Really Great Source"
            description="http://Irrelevant source/sources"
          ></SourceFlippy>
        </div>
      </div>
    </div>
  );
}
export default Sources;
