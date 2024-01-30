import SourceCard from "../modules/SourceCard";

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
          <SourceCard
            title="Really Great Source"
            description="http://Irrelevant source/sources"
          ></SourceCard>
          <SourceCard
            title="Really Great Source"
            description="http://Irrelevant source/sources"
          ></SourceCard>
        </div>
      </div>
    </div>
  );
}
export default Sources;
