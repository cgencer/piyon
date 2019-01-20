<?php

/* sites/all/themes/gavias_unix/templates/page/parts/preloader.html.twig */
class __TwigTemplate_4230f9ac144192d8a46a2360b15fb72a1f8c5f7aa05bde27d90ed5a59cfc5b9d extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 1);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        if ((($context["preloader"] ?? null) == 1)) {
            // line 2
            echo "    <div id=\"jpreContent\">
        <div id=\"jprecontent-inner\">
           <div class=\"preloader-wrapper hidden active\">
              <img src=\"";
            // line 5
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["theme_path"] ?? null), "html", null, true));
            echo "/images/preloader/preloader-7.gif\" alt=\"\" />
           </div>  
        </div>
      </div>
  ";
        }
        // line 9
        echo " ";
    }

    public function getTemplateName()
    {
        return "sites/all/themes/gavias_unix/templates/page/parts/preloader.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  58 => 9,  50 => 5,  45 => 2,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "sites/all/themes/gavias_unix/templates/page/parts/preloader.html.twig", "/home/piyon/v8/sites/all/themes/gavias_unix/templates/page/parts/preloader.html.twig");
    }
}
